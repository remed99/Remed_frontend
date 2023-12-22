import axios from "axios";

import { toast } from "react-toastify";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.response.use(
(response)=>{
return response;
},

(reject)=>{
if(reject.response.status == 401){
    localStorage.clear();
    window.location.href = '/login';

    toast.error("Please login...");
}
})

export default axiosInstance