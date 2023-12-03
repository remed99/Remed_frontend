import { Box } from "@mui/material";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <Box>
        <ToastContainer position="top-right"/>
      <Routes />
    
    </Box>
  );
};

export default App;
