import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentData = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: paymentData = [], isLoading: paymentDataLoading} = useQuery({ 
        queryKey: ['paymentData', user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),
  
        queryFn: async ()=>  {
          const fetchedData= await axiosSecure.get(`/paymentData?email=${user?.email}`);
          return fetchedData.data;
        },
      });
      
      return [paymentData, paymentDataLoading];
};

export default usePaymentData;