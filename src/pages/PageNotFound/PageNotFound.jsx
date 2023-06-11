import { Link } from "react-router-dom";
import notFoundImg from "../../assets/pageNotFound.jpg";

const PageNotFound = () => {
  return (
    <div>
      <img className="w-96 md:w-[700px] mx-auto" src={notFoundImg} alt="" />

      <div className="text-center">
        <Link
          className="text-white bg-orange-900 text-2xl px-4 py-2 font-bold rounded-md hover:bg-orange-600"
          to="/"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
