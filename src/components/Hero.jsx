import { Search } from "@mui/icons-material";
import { Box, OutlinedInput, Typography } from "@mui/material";
import React from "react";
import Button from "./button/Button";
import HeroImage from "../asset/Medicine-amico.png";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "2px auto 2px auto",
        justifyContent: "space-between",
        flexDirection: "column",
        // height: "85vh",
        // backgroundColor: "#fbf6eb",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "2px auto 2px auto",
          width: "90%",
          alignItems: "center",
        }}
      >
        <OutlinedInput
          placeholder="Search for brand name or Generic name of medicine...."
          sx={{
            border: "1px solid black",
            width: "100%",
            borderRadius: "50px",
            bgcolor: "white",
            margin: "5px",
          }}
        />
        <Button Value={"Search"} />
      </Box>
      <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "column", md: "row", margin: "40px"}, justifyContent: "space-between"}}>
        <Box sx={{display: "flex", flexDirection: "column", width: {xs: "100%", sm: "100%", md: "50%"}}}>
        <Typography variant="h2" sx={{color: "#B06161"}}>Search by</Typography>
        <Typography variant="h3" sx={{color: "#DC8686"}}>generic or brand name,</Typography>
        <Typography variant="h4" sx={{color: "black"}}>and we'll find the information you need...</Typography>
        </Box>
        
        <Box sx={{width: {xs: "100%", sm: "100%", md: "35%", lg: "30%"}}}><img src={HeroImage} style={{width: "100%"}}/></Box>
      </Box>
    </Box>
  );
};

export default Hero;
