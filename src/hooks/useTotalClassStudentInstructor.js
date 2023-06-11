import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTotalClassStudentInstructor = () => {

    const {data: totalClassStudentInstructor = [], isLoading: totalClassStudentInstructorLoading, refetch} = useQuery({ 
        queryKey: ['totalClassStudentInstructor'],
  
        // public showing popular data
        queryFn: async ()=>  {
          const fetchedData= await axios.get(`http://localhost:5000/totalClassStudentInstructor`);
          return fetchedData.data;
        },
      });
      
      return [totalClassStudentInstructor, totalClassStudentInstructorLoading, refetch];
    

};

export default useTotalClassStudentInstructor;