import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useIsAdmin from "../hooks/useIsAdmin";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useIsAdmin();

  if (isLoading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }
  if (user?.email && isAdmin === true) {
    return children;
  }

  return <Navigate to="/" replace={true}></Navigate>;
};

export default AdminRoute;
