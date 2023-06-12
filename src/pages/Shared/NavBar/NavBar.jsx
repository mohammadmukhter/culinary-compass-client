import { Link } from "react-router-dom";
import logoImg from "../../../assets/culinaryLogo.svg";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import useAuth from "../../../hooks/useAuth";
import useIsAdmin from "../../../hooks/useIsAdmin";
import useIsInstructor from "../../../hooks/useIsInstructor";
import useIsStudent from "../../../hooks/useIsStudent";

const NavBar = () => {
  const { user, logOutHandler } = useAuth();
  const [isInstructor] = useIsInstructor();
  const [isAdmin] = useIsAdmin();
  const [isStudent] = useIsStudent();

  const logOut = () => {
    logOutHandler()
      .then(() => {
        console.log("log out successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if (
  //   (user && isInstructorLoading) ||
  //   (user && isAdminLoading) ||
  //   (user && isStudentLoading)
  // ) {
  //   return <h2>Loading..</h2>;
  // }

  const listItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        {" "}
        <Link to="classes">Classes</Link>
      </li>
      {/* <li>
        <Link
          to={
            isAdmin === true
              ? "/dashboard/adminHome"
              : isInstructor === true
              ? "/dashboard/instructorHome"
              : isStudent === true
              ? "/dashboard/studentHome"
              : ""
          }
        >
          Dashboard
        </Link>
      </li> */}
      {isInstructor === true && (
        <li>
          <Link to="/dashboard/instructorHome">Dashboard</Link>
        </li>
      )}
      {isAdmin === true && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {isStudent === true && (
        <li>
          <Link to="/dashboard/studentHome">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="">
      <div className="fixed z-50 max-w-[1340px] mx-auto navbar bg-[#E4CDA7]/75 px-4 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content uppercase font-medium mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItem}
            </ul>
          </div>
          <Link to="/">
            <img className="w-full h-10" src={logoImg} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-medium">
            {listItem}
          </ul>
        </div>

        <div className="navbar-end space-x-3">
          {user && user.email ? (
            <div className="flex items-center">
              <PrimaryButton clickHandler={logOut}>Log Out</PrimaryButton>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName}
                      {/* <span className="badge">New</span> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <PrimaryButton>Log In</PrimaryButton>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
