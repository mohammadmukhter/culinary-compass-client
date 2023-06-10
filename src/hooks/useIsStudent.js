import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsStudent = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isStudent = false , isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/isStudent?email=${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isStudent, isStudentLoading];
};

export default useIsStudent;
