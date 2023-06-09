import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: selectedClasses = [], isLoading: selectedClassesLoading, refetch} = useQuery({ 
        queryKey: ['selectedClasses', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/selectedClasses?email=${user?.email}`);
          return fetchedData.data;
        },
      });
      
      return [selectedClasses, selectedClassesLoading, refetch];
    

};

export default useSelectedClasses;