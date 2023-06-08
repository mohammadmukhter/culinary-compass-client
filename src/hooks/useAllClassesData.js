import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClassesData = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: allClasses = [], isLoading: allClassesLoading} = useQuery({ 
        queryKey: ['allClasses'],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/allClasses`);
          return fetchedData.data;
        },
      });
      
      return [allClasses, allClassesLoading];
    

};

export default useClassesData;