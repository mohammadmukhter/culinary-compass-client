import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useIsStudent from "../hooks/useIsStudent";

const StudentRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const [isStudent, isStudentLoading] = useIsStudent();

  if (isLoading || isStudentLoading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }
  if (user?.email && isStudent === true) {
    return children;
  }

  return <Navigate to="/" replace={true}></Navigate>;
};

export default StudentRoute;
