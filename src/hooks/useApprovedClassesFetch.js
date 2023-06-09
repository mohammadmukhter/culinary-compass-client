import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedClassesFetch = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: approvedClasses = [], isLoading: approvedClassesLoading, refetch} = useQuery({ 
        queryKey: ['approvedClasses'],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/approvedClasses`);
          return fetchedData.data;
        },
      });
      
      return [approvedClasses, approvedClassesLoading, refetch];
    

};

export default useApprovedClassesFetch;