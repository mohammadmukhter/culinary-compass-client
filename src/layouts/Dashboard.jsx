import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-[1340px] mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content uppercase font-bold">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/instructorHome">Instruct Home</Link>
            </li>
            <li>
              <Link to="/dashboard/addClass">Add Class</Link>
            </li>
            <li>
              <Link to="/dashboard/myClasses">My Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
