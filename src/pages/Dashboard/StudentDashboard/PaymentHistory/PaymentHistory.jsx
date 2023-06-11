import usePaymentData from "../../../../hooks/usePaymentData";

const PaymentHistory = () => {
  const [paymentData, paymentDataLoading] = usePaymentData();

  if (paymentDataLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }
  return (
    <div className="mx-4">
      <div>
        <h2 className="text-center text-3xl font-bold my-6 uppercase text-orange-600">
          All Payments History
        </h2>
        <div className="font-bold my-2">
          <span className="uppercase">Student Email:</span>{" "}
          {paymentData && paymentData[0]?.studentEmail}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-800/50 text-white">
            <tr>
              <th className="px-2 py-1 border-[1px]">#</th>
              <th className="px-2 py-1 border-[1px]">Class ID</th>
              <th className="px-2 py-1 border-[1px]">Transaction ID</th>
              <th className="px-2 py-1 border-[1px]">Price</th>
              <th className="px-2 py-1 border-[1px]">Transaction Date</th>
              <th className="px-2 py-1 border-[1px]">Currency</th>
              <th className="px-2 py-1 border-[1px]">Payment Method</th>
            </tr>
          </thead>
          <tbody className="bg-green-100/80">
            {paymentData &&
              paymentData.map((data, index) => (
                <tr key={data._id}>
                  <th className="px-2 py-1 border-[1px]">{index + 1}</th>
                  <td className="px-2 py-1 border-[1px]">{data.classId}</td>
                  <td className="px-2 py-1 border-[1px]">
                    {data.transactionId}
                  </td>
                  <td className="px-2 py-1 border-[1px] text-end font-semibold text-purple-700">
                    {data.price}
                  </td>
                  <td className="px-2 py-1 border-[1px]">{data.date}</td>
                  <td className="px-2 py-1 border-[1px]">{data.currency}</td>
                  <td className="px-2 py-1 border-[1px]">
                    {data.paymentMethod[0]}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
