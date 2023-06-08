import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsersFetchData = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: users = [], isLoading: usersLoading, refetch} = useQuery({ 
        queryKey: ['users'],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/users`);
          return fetchedData.data;
        },
      });
      
      return [users, usersLoading, refetch];
    

};

export default useUsersFetchData;