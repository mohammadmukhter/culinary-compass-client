import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="max-w-[1340px] mx-auto relative">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
