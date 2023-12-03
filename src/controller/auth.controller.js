// import { getRequest, postRequest } from "./request";
import Request from "./request";




class Auth extends Request{
    login = async (data)=>{
            try {
                const response = await this.postRequest('auth/login',null, data);
                return response;
               
            } catch (error) {
                throw error;
            }
        }
    }
const auth = new Auth();
export default auth;

