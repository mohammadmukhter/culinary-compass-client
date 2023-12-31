import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePopularClassesData = () => {


    const {data: popularClasses = [], isLoading: popularClassesLoading, refetch} = useQuery({ 
        queryKey: ['popularClasses'],
        // public showing popular data

        queryFn: async ()=>  {
          const fetchedData= await axios.get(`https://culinary-compass-server.vercel.app/popularClasses`);
          return fetchedData.data;
        },
      });
      
      return [popularClasses, popularClassesLoading, refetch];
    

};

export default usePopularClassesData;