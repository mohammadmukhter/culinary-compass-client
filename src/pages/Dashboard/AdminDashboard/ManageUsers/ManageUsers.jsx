import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUsersFetchData from "../../../../hooks/useUsersFetchData";

const ManageUsers = () => {
  const [allClasses, allClassesLoading, refetch] = useUsersFetchData();
  const [axiosSecure] = useAxiosSecure();
  // console.log(allClasses);

  if (allClassesLoading) {
    return <h2>Loading....</h2>;
  }

  const roleChangeHandler = (userId, userRole) => {
    console.log(userId, userRole);

    axiosSecure
      .patch(`http://localhost:5000/users/${userId}`, {
        role: userRole,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full px-4">
      <div className=" bg-[#606C5D] py-4 rounded">
        <h2 className="text-center text-2xl font-bold uppercase rounded-md text-white">
          Manage Classes{" "}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className=" font-bold  bg-[#606C5D] text-white">
            <tr>
              <th className="border-[1px] rounded-sm">#</th>
              <th className="border-[1px] rounded-sm">Photo</th>
              <th className="border-[1px] rounded-sm">Name</th>
              <th className="border-[1px] rounded-sm">Email</th>
              <th className="border-[1px] rounded-sm">Role</th>
              <th className="border-[1px] rounded-sm">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700/80">
            {allClasses &&
              allClasses.map((data, index) => (
                <tr key={data._id}>
                  <th className=" font-semibold border-[1px] rounded-sm">
                    {index + 1}
                  </th>
                  <td className="border-[1px] rounded-sm">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={data.photoUrl} />
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.name}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.email}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data?.role === "admin" && (
                      <span className="text-blue-800 font-bold">Admin</span>
                    )}
                    {data?.role === "instructor" && (
                      <span className="text-orange-600 font-bold">
                        Instructor
                      </span>
                    )}
                    {data?.role === "student" && (
                      <span className="text-gray-800 font-bold">Student</span>
                    )}
                  </td>

                  <td className=" border-[1px] rounded-sm space-y-1">
                    <button
                      disabled={data?.role === "instructor" && "disabled"}
                      onClick={() => roleChangeHandler(data._id, "instructor")}
                      className="btn btn-ghost px-4 py-1  bg-orange-600 text-white"
                    >
                      Make Instructor
                    </button>
                    <br />
                    <button
                      disabled={data?.role === "admin" && "disabled"}
                      onClick={() => roleChangeHandler(data._id, "admin")}
                      className="btn btn-ghost px-4 py-1   bg-blue-600 text-white"
                    >
                      Make Admin
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
