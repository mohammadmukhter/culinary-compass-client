import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";

const MyEnrolledClasses = () => {
  const [enrolledClasses, enrolledClassesLoading] = useEnrolledClasses();

  if (enrolledClassesLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="mx-4">
      <h2 className="text-center text-3xl font-bold my-6 uppercase text-orange-600">
        My Enrolled Classes
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-800/50 text-white">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Enrolled Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-green-100/80">
            {enrolledClasses &&
              enrolledClasses.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.classImage} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{data.className}</td>
                  <td>{data.instructorName}</td>
                  <td className="text-end font-semibold text-purple-700">
                    {data.price}
                  </td>
                  <td>{data.date}</td>
                  <td className="text-green-500 font-bold uppercase">
                    {data.status}
                  </td>
                  <td>
                    <button className="px-2 py-1 bg-orange-600  text-white font-bold rounded-md hover:bg-gray-500">
                      Payment Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
