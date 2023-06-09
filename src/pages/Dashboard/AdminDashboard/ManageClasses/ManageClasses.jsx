import { useState } from "react";
import { useForm } from "react-hook-form";
import useAllClassesData from "../../../../hooks/useAllClassesData";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [allClasses, allClassesLoading, refetch] = useAllClassesData();
  const [axiosSecure] = useAxiosSecure();
  const [selectedId, setSelectedId] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // console.log(allClasses);

  if (allClassesLoading) {
    return <h2>Loading....</h2>;
  }

  //class status change handler
  const statusChangeHandler = (classId, classStatus) => {
    console.log(classId, classStatus);

    axiosSecure
      .patch(`/classes/${classId}`, {
        status: classStatus,
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

  // feedback send handler
  const feedbackHandler = (data) => {
    console.log(data, selectedId);
    axiosSecure
      .patch(`/classesFeedback/${selectedId}`, {
        feedback: data.feedback,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          console.log("Feedback sent successfully");
          refetch();
          reset();
          setSelectedId(null);
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
              <th className="border-[1px] rounded-sm">Class Name</th>
              <th className="border-[1px] rounded-sm">Instructor Name</th>
              <th className="border-[1px] rounded-sm">Instructor Email</th>
              <th className="border-[1px] rounded-sm">Price</th>
              <th className="border-[1px] rounded-sm">Available Seat</th>
              <th className="border-[1px] rounded-sm">Status</th>
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
                        <img src={data.classImage} />
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.className}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data.instructorName}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data.instructorEmail}
                  </td>
                  <td className="text-end font-semibold border-[1px] rounded-sm">
                    {data.price}
                  </td>
                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data?.availAbleSeat}
                  </td>

                  <td className=" font-semibold border-[1px] rounded-sm">
                    {data.status === "pending" && (
                      <span className="text-orange-600">Pending</span>
                    )}
                    {data.status === "approved" && (
                      <span className="text-green-600">Approved</span>
                    )}
                    {data.status === "denied" && (
                      <span className="text-red-600">Denied</span>
                    )}
                  </td>

                  <td className=" border-[1px] rounded-sm space-y-1">
                    <button
                      disabled={
                        (data.status === "approved" && "disabled") ||
                        (data.status === "denied" && "disabled")
                      }
                      onClick={() => statusChangeHandler(data._id, "approved")}
                      className="btn btn-ghost px-4 py-1  bg-green-600 text-white"
                    >
                      Approve
                    </button>
                    <button
                      disabled={
                        (data.status === "approved" && "disabled") ||
                        (data.status === "denied" && "disabled")
                      }
                      onClick={() => statusChangeHandler(data._id, "denied")}
                      className="btn btn-ghost px-4 py-1   bg-red-600 text-white"
                    >
                      Deny
                    </button>

                    <label
                      onClick={() => {
                        setSelectedId(data._id);
                      }}
                      htmlFor="my_modal_6"
                      className="btn btn-ghost px-3 rounded-md  py-1  bg-blue-600 text-white"
                    >
                      Send Feedback
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* feedback modal */}

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Send FeedBack About Class</h3>
          <form onSubmit={handleSubmit(feedbackHandler)}>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("feedback", { required: true })}
                placeholder="Feedback"
              ></textarea>
              {errors.feedback && (
                <span className="text-red-600 text-left text-sm">
                  Feedback is required
                </span>
              )}
            </div>
            <button className="btn bg-green-600 text-white">
              Send Feedback
            </button>
          </form>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
