import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckOutForm = ({ classData }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const price = parseFloat(classData.price);
  const availAbleSeat = parseInt(classData.availAbleSeat);
  //   console.log(classData);

  useEffect(() => {
    if (availAbleSeat < 1) {
      setCardError("No Available Seat!!!");
    }
    if (price > 0 || availAbleSeat < 1) {
      axiosSecure
        .post(
          "https://culinary-compass-server.vercel.app/createPaymentIntent",
          { price }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, axiosSecure, availAbleSeat]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCardError("");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      console.log("payment-method:", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    setProcessing(false);
    // console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      toast.success("Payment successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const paymentInfo = {
        transactionId: paymentIntent.id,
        studentName: user?.displayName,
        studentEmail: user?.email,
        className: classData.className,
        classId: classData._id,
        selectedClassId: classData.selectedClassId,
        price,
        date: new Date(),
        currency: paymentIntent.currency,
        paymentMethod: paymentIntent.payment_method_types,
        status: "servicePending",
      };

      axiosSecure.post("/payments", paymentInfo).then((res) => {
        if (res.data.insertedData.insertedId) {
          toast.success("Payment data Stored Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    }
  };
  return (
    <div className="w-3/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-green-700 text-white px-3 py-1 disabled:bg-gray-300 font-bold rounded hover:bg-orange-700 my-2"
          type="submit"
          disabled={!stripe || processing || !clientSecret || availAbleSeat < 1}
        >
          Pay
        </button>
      </form>
      <div className="text-red-600">{cardError && cardError}</div>
      <div className="text-green-600">
        {transactionId && `payment successfully: ${transactionId}`}
      </div>
    </div>
  );
};

export default CheckOutForm;
