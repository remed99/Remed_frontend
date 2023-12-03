
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Authorizer = ({isVerified, component}) => {
    const navigate = useNavigate();
    if(!isVerified){
      
        navigate('/login');
    
        toast.error("You are not authorized..Please login..");
        return null;
    
    }
    return component;
  }

export default Authorizer