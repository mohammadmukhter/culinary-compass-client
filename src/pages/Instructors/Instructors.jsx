import useAllInstructors from "../../hooks/useAllInstructors";

const Instructors = () => {
  const [allInstructors, allInstructorsLoading] = useAllInstructors();

  if (allInstructorsLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  // console.log(allInstructors);
  return (
    <div className=" px-2 md:px-0 pt-[100px] bg-green-700/10 pb-12">
      <div className="flex flex-col md:flex-row px-4 pb-6 ">
        <div className=" w-full md:w-1/2 space-y-2">
          <h2 className="text-2xl text-orange-600 font-bold">
            Our Honorable Instructors
          </h2>
          <h1 className="text-4xl font-bold bg-orange-600/10">
            We have highly trained Instructors in different culinary Field.
          </h1>
        </div>
        <div className="w-full md:w-1/2 text-right">
          <img className="w-1/2 ml-auto opacity-90 rounded-xl" src="" alt="" />
        </div>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {allInstructors &&
          allInstructors.map((data) => (
            <div key={data._id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-96 w-full object-cover"
                  src={data.instructorImage}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.instructorName}</h2>
                <p>Email: {data.instructorEmail}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    Takes {data.totalClasses} Classes
                  </div>
                  <div className="badge badge-outline">
                    {data.totalStudent ? data.totalStudent : 0} Students
                  </div>
                </div>
                <button className="bg-orange-900 w-3/4 mx-auto text-white px-4 py-1 font-semibold rounded my-3 hover:bg-orange-600">
                  See Classes
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
