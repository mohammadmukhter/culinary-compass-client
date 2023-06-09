import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
  const location = useLocation();
  const classData = location.state.classData;

  return (
    <div className="mx-12 my-12">
      <h2 className="text-center text-3xl font-bold text-orange-600 my-4">
        Please Process Payment
      </h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm classData={classData} />
      </Elements>
    </div>
  );
};

export default Payment;
