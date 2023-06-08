import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import InstructorHome from "../pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses/MyClasses";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  // home route
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

  // dashboard route
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // Instructor routes here
      {
        path: "instructorHome",
        element: <InstructorHome></InstructorHome>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },

      // admin routes here
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);

export default Routes;
