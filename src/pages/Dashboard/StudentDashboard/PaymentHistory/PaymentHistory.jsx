import usePaymentData from "../../../../hooks/usePaymentData";

const PaymentHistory = () => {
  const [paymentData, paymentDataLoading] = usePaymentData();

  if (paymentDataLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="mx-4">
      <div>
        <h2 className="text-center text-3xl font-bold my-6 uppercase text-orange-600">
          All Payments History
        </h2>
        <div className="font-bold my-2">
          <span className="uppercase">Student Email:</span>{" "}
          {paymentData[0].studentEmail}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead className="bg-gray-800/50 text-white">
            <tr>
              <th className="px-2 py-1">#</th>
              <th className="px-2 py-1">Class ID</th>
              <th className="px-2 py-1">Transaction ID</th>
              <th className="px-2 py-1">Price</th>
              <th className="px-2 py-1">Transaction Date</th>
              <th className="px-2 py-1">Currency</th>
              <th className="px-2 py-1">Payment Method</th>
            </tr>
          </thead>
          <tbody className="bg-green-100/80">
            {paymentData &&
              paymentData.map((data, index) => (
                <>
                  <tr key={data._id}>
                    <th className="px-2 py-1">{index + 1}</th>
                    <td className="px-2 py-1">{data.classId}</td>
                    <td className="px-2 py-1">{data.transactionId}</td>
                    <td className="px-2 py-1 text-end font-semibold text-purple-700">
                      {data.price}
                    </td>
                    <td className="px-2 py-1">{data.date}</td>
                    <td className="px-2 py-1">{data.currency}</td>
                    <td className="px-2 py-1">{data.paymentMethod[0]}</td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
