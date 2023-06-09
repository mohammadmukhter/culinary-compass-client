import { Link } from "react-router-dom";
import useClassesData from "../../../../hooks/useClassesData";

const MyClasses = () => {
  const [classes, classesLoading] = useClassesData();
  console.log(classes);

  if (classesLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div className="w-full px-4">
      <div className=" bg-[#606C5D] py-4 flex flex-col md:flex-row justify-start md:justify-center items-center rounded">
        <div className="w-1/3"></div>
        <h2 className="text-center w-1/3 text-2xl font-bold uppercase rounded-md text-white">
          All Classes{" "}
        </h2>
        <div className=" text-right w-1/3 text-white">
          <Link to="/dashboard/addClass">
            <button className=" text-white outline-none px-4 py-2 rounded-md mx-8 btn btn-sm bg-green-700 ">
              Add Class
            </button>
          </Link>
        </div>
      </div>

      <div className="my-6">
        <table>
          <tbody>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Instructor
              </td>
              <td className="border-[2px] px-2 py-1 text-lg uppercase font-semibold">
                {classes[0]?.instructorName}
              </td>
            </tr>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Instructor Email
              </td>
              <td className="border-[2px] px-2 py-1 text-lg uppercase font-semibold">
                {classes[0]?.instructorEmail}
              </td>
            </tr>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Total Classes
              </td>
              <td className="border-[2px] px-2 py-1 text-lg uppercase font-semibold">
                {classes?.length}
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
              <th className="border-[1px] rounded-sm">Price</th>
              <th className="border-[1px] rounded-sm">Available Seat</th>
              <th className="border-[1px] rounded-sm">Enrolled</th>
              <th className="border-[1px] rounded-sm">Status</th>
              <th className="border-[1px] rounded-sm">Feedback</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {classes &&
              classes.map((data, index) => (
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
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data.price}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.availAbleSeat}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.enrolled ? data.enrolled : 0}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.status === "pending" && (
                      <span className="text-orange-600 font-bold">Pending</span>
                    )}
                    {data?.status === "approved" && (
                      <span className="text-green-600 font-bold">Approved</span>
                    )}
                    {data?.status === "denied" && (
                      <span className="text-red-600 font-bold">Denied</span>
                    )}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm text-red-600">
                    {data?.feedback ? data.feedback : ""}
                  </td>
                  <td className=" border-[1px] rounded-sm">
                    <button className="btn btn-ghost btn-xs bg-orange-600 text-white">
                      update
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

export default MyClasses;
