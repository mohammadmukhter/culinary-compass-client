import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useClassesData = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [classes, setClasses] = useState()

    useEffect(()=> {
        const fetcher = async()=> {
           const data = await axiosSecure.get(`/classes?email=${user?.email}`);
           return data;
        }
        fetcher()

    }, [user?.email, axiosSecure])

    return classes;

};

export default useClassesData;