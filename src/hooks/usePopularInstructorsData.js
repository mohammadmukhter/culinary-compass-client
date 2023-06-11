import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularInstructorsData = () => {

    const {data: popularInstructors = [], isLoading: popularInstructorsLoading, refetch} = useQuery({ 
        queryKey: ['popularInstructors'],
  
        // public showing popular data
        queryFn: async ()=>  {
          const fetchedData= await axios.get(`http://localhost:5000/popularInstructors`);
          return fetchedData.data;
        },
      });
      
      return [popularInstructors, popularInstructorsLoading, refetch];
    

};

export default usePopularInstructorsData;