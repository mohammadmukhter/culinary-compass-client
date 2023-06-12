import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useTotalClassStudentInstructor = () => {
    const {isLoading} = useAuth();

    const {data: totalClassStudentInstructor = [], isLoading: totalClassStudentInstructorLoading, refetch} = useQuery({ 
        queryKey: ['totalClassStudentInstructor'],
        enabled: !isLoading,
  
        // public showing popular data
        queryFn: async ()=>  {
          const fetchedData= await axios.get(`https://culinary-compass-server.vercel.app/totalClassStudentInstructor`);
          return fetchedData.data;
        },
      });
      
      return [totalClassStudentInstructor, totalClassStudentInstructorLoading, refetch];
    

};

export default useTotalClassStudentInstructor;