import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useAuth from './useAuth';


const axiosSecure = axios.create({
  baseURL: 'https://culinary-compass-server.vercel.app',
});


const useAxiosSecure = () => {
    const {logOutHandler} = useContext(AuthContext);
    const {user} = useAuth()
    const navigate = useNavigate()
  
    
    useEffect(() => {  
           
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logOutHandler();
            navigate('/login');
          }
          return Promise.reject(error);
        }
      );
            
    

      }, [logOutHandler, navigate, user]);
    
    return [axiosSecure];
};

export default useAxiosSecure;