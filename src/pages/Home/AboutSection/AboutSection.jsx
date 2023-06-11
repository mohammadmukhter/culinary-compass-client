import { Slide } from "react-awesome-reveal";
import bgImg2 from "../../../assets/banner/img1.jpg";
import bgImg from "../../../assets/banner/pastry2.jpg";
import useTotalClassStudentInstructor from "../../../hooks/useTotalClassStudentInstructor";

const AboutSection = () => {
  const [totalClassStudentInstructor, totalClassStudentInstructorLoading] =
    useTotalClassStudentInstructor();

  if (totalClassStudentInstructorLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="my-16">
      <div
        className="hero bg-fixed w-full"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>

        <div className="hero-content flex flex-col text-neutral-content">
          <div className="text-center my-12 text-5xl font-semibold">
            <h2 className="drop-shadow-lg shadow-orange-600">About Us</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-white w-full justify-around">
            <div className="w-full md:w-1/2">
              <img className="w-3/4 mx-auto rounded-lg" src={bgImg2} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <Slide>
                <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
                  Culinary Compass
                </h2>
                <p className="text-gray-200 text-justify">
                  Culinary Compass Summer Edition is a specialized culinary
                  training program designed exclusively for students looking to
                  make the most of their summer vacation. This immersive program
                  offers a unique opportunity for students to dive into the
                  world of culinary arts and develop essential culinary skills
                  during their break. Led by expert chefs and instructors,
                  Culinary Compass Summer Edition combines hands-on training,
                  interactive cooking sessions, and culinary exploration to
                  provide an enriching and enjoyable summer experience. Whether
                  students have a passion for cooking or simply want to enhance
                  their culinary repertoire, Culinary Compass Summer Edition
                  offers a dynamic and engaging program tailored to the
                  interests and needs of summer vacation students.
                </p>
              </Slide>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around w-full my-12 gap-6 pt-4 pb-12">
            <div className="text-center space-y-2">
              <h1 className="text-6xl font-bold drop-shadow-lg shadow-gray-800 text-white">
                {totalClassStudentInstructor.totalInstructors}
              </h1>
              <h2 className="text-xl  text-orange-500">Instructors</h2>
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-6xl font-bold drop-shadow-lg shadow-gray-800 text-white">
                {totalClassStudentInstructor.totalStudents}
              </h1>
              <h2 className="text-xl  text-orange-500">Students</h2>
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-6xl font-bold drop-shadow-lg shadow-gray-800 text-white">
                {totalClassStudentInstructor.totalClasses}
              </h1>
              <h2 className="text-xl text-orange-500">Classes</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
