import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin = false, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/isAdmin?email=${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useIsAdmin;
