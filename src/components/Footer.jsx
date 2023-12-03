import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box sx={{display: "flex",marginTop: "90px", flexDirection: "column", padding: "20px", width: "100%", background: "#F0DBAF"}}>
        <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row"}, justifyContent: 'space-between', margin: "50px"}}>
            <Box><Typography variant='h3'>REMED</Typography></Box>
            <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row"}, marginTop: "20px"}}>
                <Link to={"/"} style={{textDecoration: "none", color: "black", marginLeft:"10px"}}>
                    <Typography>Home</Typography>
                </Link>
                <Link to={"/"} style={{textDecoration: "none", color: "black", marginLeft:"10px"}}>
                    <Typography>Division</Typography>
                </Link>
                <Link to={"/"} style={{textDecoration: "none", color: "black", marginLeft:"10px"}}>
                    <Typography>About Us</Typography>
                </Link>
                <Link to={"/"} style={{textDecoration: "none", color: "black", marginLeft:"10px"}}>
                    <Typography>Contact Us</Typography>
                </Link>
            </Box>
            <Box sx={{display: "flex", marginTop: "40px"}}>
            <Facebook sx={{marginLeft: "10px"}}/>
            <Instagram sx={{marginLeft: "10px"}}/>
            <Twitter sx={{marginLeft: "10px"}}/>
            </Box>
        </Box>
        <hr color="black" style={{width: "80%", margin: "5px auto 5px auto"}} />
        
        <Box>
            <Typography sx={{textAlign: "center"}}>&copy; 2023 medinfo. All rights reserved.</Typography>
        </Box>
    </Box>
  )
}

export default Footer