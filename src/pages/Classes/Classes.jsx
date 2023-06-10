import img from "../../assets/banner/itialian1.jpg";
import useApprovedClassesFetch from "../../hooks/useApprovedClassesFetch";
import ClassCard from "./ClassCard";

const Classes = () => {
  // const { user } = useAuth();
  const [approvedClasses, approvedClassesLoading, refetch] =
    useApprovedClassesFetch();
  // const [isInstructor, isInstructorLoading] = useIsInstructor();

  if (approvedClassesLoading) {
    return <h2>Loading.....</h2>;
  }
  // if (user && isInstructorLoading) {
  //   return <h2>Loading.....</h2>;
  // }
  // console.log(isInstructor);

  return (
    <div className=" px-2 md:px-0 pt-[100px] bg-green-700/10 pb-12">
      <div className="flex flex-col md:flex-row px-4 pb-6 ">
        <div className=" w-full md:w-1/2 space-y-2">
          <h2 className="text-2xl text-orange-600 font-bold">Our Classes</h2>
          <h1 className="text-4xl font-bold">
            Choose Your Cooking or Baking Classes
          </h1>
          <p className="text-justify">
            When it comes to making pie, I tend to procrastinate and put it off,
            and I’m not really sure why. Every time I get down to actually
            making one, I’m reminded of how simple, uncomplicated and enjoyable
            a process it is. I’ve been wanting to try a new blueberry pie recipe
            for ages now…
          </p>
        </div>
        <div className="w-full md:w-1/2 text-right">
          <img
            className="w-1/2 ml-auto opacity-90 rounded-xl"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {approvedClasses.map((data) => (
          <ClassCard data={data} key={data._id} refetch={refetch}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
