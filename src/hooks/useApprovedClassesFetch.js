import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApprovedClassesFetch = () => {

    const {data: approvedClasses = [], isLoading: approvedClassesLoading, refetch} = useQuery({ 
        queryKey: ['approvedClasses'],
  
        // public showing data
        queryFn: async ()=>  {
          const fetchedData= await axios.get(`http://localhost:5000/approvedClasses`);
          return fetchedData.data;
        },
      });
      
      return [approvedClasses, approvedClassesLoading, refetch];
    

};

export default useApprovedClassesFetch;