import { Link } from "react-router-dom";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";

const MySelectedClasses = () => {
  const [selectedClasses, selectedClassesLoading] = useSelectedClasses();
  console.log(selectedClasses);

  if (selectedClassesLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="w-full px-4">
      <div className=" bg-[#606C5D] py-4 rounded">
        <div className="w-1/3"></div>
        <h2 className="text-center w-full text-2xl font-bold uppercase rounded-md text-white">
          All Classes{" "}
        </h2>
      </div>

      <div className="my-6">
        <table>
          <tbody>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Student Email
              </td>
              <td className="border-[2px] px-2 py-1 text-lg font-semibold">
                {selectedClasses[0]?.studentEmail}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-[#606C5D] text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Photo</th>
              <th className="border-[1px] rounded-sm">Class Name</th>
              <th className="border-[1px] rounded-sm">Instructor Name</th>
              <th className="border-[1px] rounded-sm">Price</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {selectedClasses &&
              selectedClasses.map((data, index) => (
                <tr key={data._id}>
                  <th className=" font-semibold border-[1px] rounded-sm">
                    {index + 1}
                  </th>
                  <td className="border-[1px] rounded-sm">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.classImage} />
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.className}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.instructorName}
                  </td>
                  <td className="text-end text-green-700 font-semibold border-[1px] rounded-sm">
                    {data.price}
                  </td>
                  <td className=" border-[1px] rounded-sm space-y-1">
                    <Link to="/dashboard/payment" state={{ classData: data }}>
                      <button className="btn btn-ghost btn-xs bg-orange-600 text-white">
                        Pay
                      </button>
                    </Link>
                    <br />
                    <button className="btn btn-ghost btn-xs bg-red-600 text-white">
                      Delete
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

export default MySelectedClasses;
