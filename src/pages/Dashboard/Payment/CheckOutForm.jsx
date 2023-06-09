import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    axiosSecure
      .post("http://localhost:5000/createPaymentIntent", { price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
      setCardError(confirmError);
    }

    setProcessing(false);
    // console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      console.log("payment successfully");
      const paymentInfo = {
        transactionId: paymentIntent.id,
        studentName: user?.displayName,
        studentEmail: user?.email,
        classId: classData.classId,
        selectedClassId: classData._id,
        price,
        date: new Date(),
        status: "servicesPending",
      };
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
          className="bg-green-700 text-white px-3 py-1 font-bold rounded hover:bg-orange-700 my-2"
          type="submit"
          disabled={!stripe || processing || !clientSecret}
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