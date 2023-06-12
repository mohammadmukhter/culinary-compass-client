import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: isInstructor = [], isLoading: isInstructorLoading, refetch} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/isInstructor?email=${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor,isInstructorLoading, refetch]
};

export default useIsInstructor;