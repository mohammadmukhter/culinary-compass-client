import usePopularClassesData from "../../../hooks/usePopularClassesData";

const PopularInstructor = () => {
  const [popularClasses, popularClassesLoading] = usePopularClassesData();
  if (popularClassesLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  console.log(popularClasses);
  return (
    <div className="my-24 mx-16">
      <div className="text-center my-8 text-5xl font-semibold">
        <h2 className="drop-shadow-lg shadow-orange-600">
          Our Popular Instructors
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularClasses &&
          popularClasses.map((classData) => (
            <div
              key={classData._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
