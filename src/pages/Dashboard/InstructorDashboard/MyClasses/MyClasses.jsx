import { Link } from "react-router-dom";
import useClassesData from "../../../../hooks/useClassesData";

const MyClasses = () => {
  const user = useClassesData();
  console.log(user);
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
                ABC
              </td>
            </tr>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Instructor Email
              </td>
              <td className="border-[2px] px-2 py-1 text-lg uppercase font-semibold">
                abc@email.com
              </td>
            </tr>
            <tr>
              <td className="border-[2px] px-2 py-1 text-lg uppercase">
                Total Classes
              </td>
              <td className="border-[2px] px-2 py-1 text-lg uppercase font-semibold">
                20
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
              <th className="border-[1px] rounded-sm">Enrolled</th>
              <th className="border-[1px] rounded-sm">Status</th>
              <th className="border-[1px] rounded-sm">Feedback</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            <tr>
              <th className=" font-semibold border-[1px] rounded-sm">
                {0 + 1}
              </th>
              <td className="border-[1px] rounded-sm">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src="" />
                  </div>
                </div>
              </td>
              <td className=" font-semibold border-[1px] rounded-sm">pastry</td>
              <td className="text-end font-semibold border-[1px] rounded-sm">
                $2000
              </td>
              <td className=" font-semibold border-[1px] rounded-sm">0</td>
              <td className=" font-semibold border-[1px] rounded-sm">
                pending
              </td>
              <td className=" font-semibold border-[1px] rounded-sm">
                nothing
              </td>
              <td className=" border-[1px] rounded-sm">
                <button className="btn btn-ghost btn-xs bg-orange-600 text-white">
                  update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
