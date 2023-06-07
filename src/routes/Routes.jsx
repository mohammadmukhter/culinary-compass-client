import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import InstructorHome from "../pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import Home from "../pages/Home/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "instructorHome",
        element: <InstructorHome></InstructorHome>,
      },
    ],
  },
]);

export default Routes;
