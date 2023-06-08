import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClassesData = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: classes=[], isLoading: classesLoading} = useQuery({ 
        queryKey: ['classes', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/classes?email=${user?.email}`);
          return fetchedData.data;
        },
      });


    // useEffect(()=> {
    //     const fetcher = async()=> {
    //        const data = await axiosSecure.get(`/classes?email=${user?.email}`);
    //        setClasses(data)
    //     }
    //     if(!loading && localStorage.getItem('access-token')){
    //         fetcher();
    //     }

    // }, [user, axiosSecure, loading]);
    

    return [classes, classesLoading];

};

export default useClassesData;