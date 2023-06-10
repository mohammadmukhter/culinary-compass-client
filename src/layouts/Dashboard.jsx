import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
            <li>
              <Link to="/dashboard/instructorHome">Instruct Home</Link>
            </li>
            <li>
              <Link to="/dashboard/addClass">Add Class</Link>
            </li>
            <li>
              <Link to="/dashboard/myClasses">My Classes</Link>
            </li>

            {/* all the admin navigation */}
            <li>
              <Link to="/dashboard/adminHome">Admin Home</Link>
            </li>
            <li>
              <Link to="/dashboard/manageClasses">Manage Classes</Link>
            </li>
            <li>
              <Link to="/dashboard/manageUsers">Manage Users Home</Link>
            </li>

            {/* all the student dashboard navigation */}
            <li>
              <Link to="/dashboard/studentHome">Student Home</Link>
              <Link to="/dashboard/mySelectedClasses">My Selected Classes</Link>
              <Link to="/dashboard/myEnrolledClasses">My Enrolled Classes</Link>
            </li>

            {/* all the home navigation */}
            <div className="divider"></div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
