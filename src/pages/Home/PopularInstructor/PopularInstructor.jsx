import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import usePopularInstructorsData from "../../../hooks/usePopularInstructorsData";
import "./style.css";

const PopularInstructor = () => {
  const [popularInstructors, popularInstructorsLoading] =
    usePopularInstructorsData();

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 4,
      spacing: 30,
    },
  });

  if (popularInstructorsLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  console.log(popularInstructors);
  return (
    <>
      <div className="my-24 mx-16">
        <div className="text-center my-8 text-5xl font-semibold">
          <h2 className="drop-shadow-lg shadow-orange-600">
            Our Popular Instructors
          </h2>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {popularInstructors &&
            popularInstructors.map((instructorData, index) => (
              <div
                key={instructorData._id}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <div className="card w-full bg-base-100 shadow-xl rounded">
                  <figure>
                    <img
                      className="h-96 object-cover rounded"
                      src={instructorData.instructorImage}
                      alt=""
                    />
                    <div className="absolute bottom-0 left-0 w-full">
                      <h2 className="text-white text-xl font-bold bg-black/75 text-start pl-4 py-1 ">
                        {instructorData.instructorName}
                        <br />
                        <span className="font-semibold text-sm text-gray-300">
                          Takes {instructorData.totalClasses} Classes
                        </span>
                      </h2>
                    </div>
                    <div className="absolute top-2 right-2 bg-orange-600/80 text-white font-bold px-2 py-1 rounded-lg">
                      {instructorData.totalStudent} Student
                    </div>
                  </figure>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularInstructor;
