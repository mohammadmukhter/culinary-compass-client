import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsStudent = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isStudent = [] , isLoading: isStudentLoading , refetch} = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/isStudent?email=${user?.email}`);
      return res.data.student;
    },
  });
  return [isStudent, isStudentLoading, refetch];
};

export default useIsStudent;
