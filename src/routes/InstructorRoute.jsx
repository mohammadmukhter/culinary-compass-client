import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useIsInstructor from "../hooks/useIsInstructor";

const InstructorRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isInstructor, isInstructorLoading] = useIsInstructor();

  if (isLoading || isInstructorLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }
  if (user?.email && isInstructor === true) {
    return children;
  }

  return <Navigate to="/" replace={true}></Navigate>;
};

export default InstructorRoute;
