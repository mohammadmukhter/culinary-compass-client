import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useIsAdmin from "../../hooks/useIsAdmin";
import useIsInstructor from "../../hooks/useIsInstructor";

const ClassCard = ({ data, refetch }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin, isAdminLoading] = useIsAdmin();
  const [isInstructor, isInstructorLoading] = useIsInstructor();

  if ((user && isInstructorLoading) || (user && isAdminLoading)) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  const selectHandler = (classId) => {
    const insertAbleData = {
      className: data.className,
      classImage: data.classImage,
      classId,
      studentEmail: user?.email,
      instructorName: data.instructorName,
      instructorEmail: data.instructorEmail,
      price: parseFloat(data.price),
      availAbleSeat: data.availAbleSeat,
    };

    if (user && user.email) {
      axiosSecure
        .post("/selectedClasses", insertAbleData)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Class Selected Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="card w-full glass rounded-md shadow-lg relative">
        <figure>
          <img
            className="rounded-md rounded-b-none w-full h-72 object-cover"
            src={data.classImage}
            alt="car!"
          />
        </figure>
        <div
          className={`card-body ${
            data.availAbleSeat < 1 ? "bg-red-400" : "bg-white"
          } rounded-md px-0 pt-0`}
        >
          <h2 className=" py-1 text-2xl font-bold text-center bg-black/80 text-white">
            {data.className}
          </h2>
          <table>
            <tbody>
              <tr>
                <td className="font-semibold uppercase p-2">Instructor</td>
                <td className="text-gray-700 font-medium p-2">
                  {data.instructorName}
                </td>
              </tr>
              <tr>
                <td className="font-semibold uppercase p-2">Available Seat</td>
                <td className="text-gray-700 font-medium p-2">
                  {data.availAbleSeat}
                </td>
              </tr>
              <tr>
                <td className="font-semibold uppercase p-2">Price</td>
                <td className="text-gray-700 font-medium p-2">
                  {" "}
                  $<span className="text-green-600">{data.price}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="card-actions justify-center">
            <button
              className=" border-[1px] border-white px-4 py-1 bg-[#1F8A70] text-white hover:bg-yellow-900 hover:text-white disabled:bg-gray-600/50 disabled:border-0 disabled:hover:cursor-not-allowed hover:border-[#e2d0b2] uppercase font-bold rounded shadow-2xl"
              onClick={() => selectHandler(data._id)}
              disabled={
                (data.availAbleSeat < 1 && "disabled") ||
                (isAdmin === true && "disabled") ||
                (isInstructor === true && "disabled")
              }
            >
              Select class
            </button>
          </div>
        </div>
        {data.enrolled ? (
          <div className="absolute right-2 top-2 px-2 py-1 rounded text-white font-bold bg-orange-600/80 shadow-md">
            {data.enrolled} Enrolled
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ClassCard;
