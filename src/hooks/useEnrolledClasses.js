import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClasses = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: enrolledClasses = [], isLoading: enrolledClassesLoading} = useQuery({ 
        queryKey: ['enrolledClasses', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/enrolledClasses?email=${user?.email}`);
          return fetchedData.data;
        },
      });
      
      return [enrolledClasses, enrolledClassesLoading];
};

export default useEnrolledClasses;