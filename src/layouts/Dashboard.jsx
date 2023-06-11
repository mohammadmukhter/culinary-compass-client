import {
  FaCheckCircle,
  FaHistory,
  FaHome,
  FaHouseUser,
  FaListAlt,
  FaPlusCircle,
  FaRegListAlt,
  FaShoppingCart,
  FaThList,
  FaUserCog,
  FaUserTie,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import useIsInstructor from "../hooks/useIsInstructor";
import useIsStudent from "../hooks/useIsStudent";

const Dashboard = () => {
  const [isStudent, isStudentLoading] = useIsStudent();
  const [isInstructor, isInstructorLoading] = useIsInstructor();
  const [isAdmin, isAdminLoading] = useIsAdmin();

  if (isStudentLoading || isInstructorLoading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1340px] mx-auto">
      <div className="w-fit mx-auto">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col my-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase font-bold">
            {/* Sidebar content here */}

            {/* all the Instructor Navigation */}
            {isInstructor && (
              <>
                <li>
                  <Link to="/dashboard/instructorHome">
                    <FaHouseUser></FaHouseUser>Instruct Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addClass">
                    {" "}
                    <FaPlusCircle />
                    Add Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myClasses">
                    <FaListAlt />
                    My Classes
                  </Link>
                </li>
              </>
            )}

            {/* all the admin navigation */}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/adminHome">
                    <FaHouseUser></FaHouseUser> Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageClasses">
                    <FaThList />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageUsers">
                    <FaUserCog />
                    Manage Users
                  </Link>
                </li>
              </>
            )}

            {/* all the student dashboard navigation */}
            {isStudent && (
              <>
                <li>
                  <Link to="/dashboard/studentHome">
                    <FaHouseUser></FaHouseUser> Student Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mySelectedClasses">
                    <FaShoppingCart />
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myEnrolledClasses">
                    <FaCheckCircle />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/PaymentHistory">
                    <FaHistory />
                    Payments History
                  </Link>
                </li>
              </>
            )}

            {/* all the home navigation */}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome></FaHome> Home
              </Link>
            </li>
            <li>
              <Link to="/instructors">
                <FaUserTie />
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes">
                <FaRegListAlt />
                Classes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
