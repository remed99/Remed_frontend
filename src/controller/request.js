import axiosInstance from "./axiosInstance";



// const getRequest = async (url)=>{
// try {
//     const response = await axiosInstance.get(url);
//     return response;
// } catch (error) {
//     return error;
// }
// }

// const postRequest = async (url, token, data)=>{
//     try {
//         let headers = {};
//         if(token){
//             headers.Authorization = "Bearer " + token;
//         }
//         const response = await axiosInstance.post(url, data, headers);
//         return response;
//      } catch(error){
//         return error
//      }
// }


class Request {
    getRequest = async (url)=>{
        try {
            const response = await axiosInstance.get(url);
            return response;
        } catch (error) {
            throw error;
        }
        }

        postRequest = async (url, token, data)=>{
            try {
                let headers = {};
                if(token){
                    headers.Authorization = "Bearer " + token;
                }
                const response = await axiosInstance.post(url, data, headers);
                return response;
             } catch(error){
                throw error
             }
        }
}



export default Request;
// export {getRequest, postRequest}