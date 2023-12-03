import React from 'react';
import LoginForm from "../components/loginForm/LoginForm"
import { Box } from '@mui/material';

const LoginPage = () => {


  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "80px", marginBottom: "80px"}}>
      <LoginForm/>
    </Box>
  )
}

export default LoginPage