import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassCard = ({ data, refetch }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const selectHandler = (classId) => {
    // console.log(classId);
    const insertAbleData = {
      className: data.className,
      classImage: data.classImage,
      classId,
      studentEmail: user?.email,
      instructorName: data.instructorName,
      instructorEmail: data.instructorEmail,
      price: parseFloat(data.price),
    };

    if (user && user.email) {
      axiosSecure
        .post("/selectedClasses", insertAbleData)
        .then((res) => {
          console.log(res.data);
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="card w-full glass rounded-md shadow-lg">
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
              disabled={data.availAbleSeat < 1 && "disabled"}
            >
              Select class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
