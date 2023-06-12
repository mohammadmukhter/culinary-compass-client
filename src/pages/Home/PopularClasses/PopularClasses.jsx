import { motion } from "framer-motion";
import usePopularClassesData from "../../../hooks/usePopularClassesData";

const PopularClasses = () => {
  const [popularClasses, popularClassesLoading] = usePopularClassesData();

  if (popularClassesLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  // console.log(popularClasses);
  return (
    <div className="my-24 mx-16">
      <div className="text-center my-8 text-5xl font-semibold">
        <h2 className="drop-shadow-lg shadow-orange-600">
          Our Popular Classes
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularClasses &&
          popularClasses.map((classData) => (
            <div
              key={classData._id}
              className="card card-compact w-full bg-base-100 shadow-xl rounded-sm relative"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
              >
                {" "}
                <figure>
                  <img
                    className="h-64 w-full object-cover rounded"
                    src={classData.classImage}
                    alt=""
                  />
                </figure>
              </motion.button>

              <div className="card-body">
                <h2 className="card-title">{classData.className}</h2>
                <p>Instructor : {classData.instructorName}</p>
                <div className="card-actions justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-orange-950 text-white px-3 py-1 rounded-md mx-auto font-bold  text-lg hover:bg-orange-800"
                  >
                    Details
                  </motion.button>
                </div>
              </div>
              <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-orange-600/80 text-white font-bold">
                {classData.enrolled} Enrolled
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularClasses;
