import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllInstructors = () => {

    const {data: allInstructors = [], isLoading: allInstructorsLoading, refetch} = useQuery({ 
        queryKey: ['allInstructors'],
  
        // public showing popular data
        queryFn: async ()=>  {
          const fetchedData= await axios.get(`https://culinary-compass-server.vercel.app/allInstructors`);
          return fetchedData.data;
        },
      });
      
      return [allInstructors, allInstructorsLoading, refetch];
    

};

export default useAllInstructors;