import { Label } from "@mui/icons-material";
import { Box, Button, Grid, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CompanySvc from "../controller/company.controller";
import { toast } from "react-toastify";
import DivisionSvc from "../controller/division.controller";

const DivisionPage = () => {
  const [textVisible, setTextvisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState();
  const [result, setResult] = useState();
  


  const searchSchema = Yup.object({
    companyName: Yup.string().required(),
    divisionName: Yup.string(),
    areaName: Yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(searchSchema),
  });

  const getAllCompanies = async () => {
    try {
      const respone = await CompanySvc.getAllCompany();

      setCompany(respone?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const divisionHandler = async (data) => {
    

    try{
      const response = await DivisionSvc.getAllDivision(data);
      // console.log(response);
  

      setResult(response?.data?.data);
    }catch (error){
      setResult();
      toast.error(error.response?.data?.msg);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCompanies();
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ display: "flex", width: "100%", padding: "10px", flexDirection: "column", gap: 4 }}>
        <Box
          sx={{
            margin: "10px auto 10px auto",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "20px",
            width: "80%",
            WebkitBoxShadow: "9px 10px 51px -14px rgba(0,0,0,0.75)",
            mozBoxShadow: "-9px 10px 51px -14px rgba(0,0,0,0.75)",
            boxShadow: "-9px 10px 51px -14px rgba(0,0,0,0.75",
          }}
        >
          <Typography variant="h5">
            Search For Divsion Contact Number:
          </Typography>
          <form style={{marginTop: "20px"}} onSubmit={handleSubmit(divisionHandler)}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <label htmlFor="companyName">Company Name:</label>
                  <select
                    style={{ padding: "5px",}}
                    {...register("companyName")}
                  >
                    <option value="">Select Company Name</option>
                    {company?.map((item) => {
                      return (
                        <option key={item._id} value={item.companyName}>
                          {item.companyName}
                        </option>
                      );
                    })}
                  </select>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <label htmlFor="divsionName">Division Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Division Name.."
                    style={{
                      width: "100%",
                      padding: "5px",
                      fontFamily: "roboto",
                    }}
                    {...register("divisionName")}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <label htmlFor="divsionName">Area Name:</label>
                  <input
                    type="text"
                    placeholder="Enter Division Name.."
                    style={{
                      width: "100%",
                      padding: "5px",
                      fontFamily: "roboto",
                    }}
                    {...register("areaName")}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} sx={{ marginTop: "10px" }}>
                <Button type="submit" variant="contained" sx={{ width: "100%" }} onClick={()=>{setTextvisible(false)}}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        {
          textVisible ? (<>
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", sm: "100%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
            margin: "40px auto 40px auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#B06161", textAlign: "center" }}
          >
            Search For Companies Division Information Here......
          </Typography>
        </Box></>) : (<>
        {
          !result ? (<Box><Typography variant="h4" sx={{textAlign: "center"}}>No Result Found.....</Typography></Box>) : (
          <>
          {
            result?.map((item)=>{
              return(
                <>
                    <Box
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              margin: "20px auto 20px auto",
              width: "80%",
              padding: "10px",
              WebkitBoxShadow:
                "10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
              boxShadow:
                "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)",
            }}
          >
            <Typography variant="h6" sx={{margin: "30px", color: "blue"}}>Division Name: <span style={{color: "black"}}>{item?.divisionName}</span></Typography>
            <Typography variant="h6" sx={{margin: "30px", color: "red"}}>
              Company Name: <span style={{color: "black"}}>{item?.companyName}</span>
            </Typography>
            <Box>
              <Typography variant="h6" sx={{margin: "30px"}}>Area Information:</Typography>
              {
                item?.areaInfo?.map((item)=>{
                  return(
                    <Typography key={item._id} sx={{margin: "30px"}}>{item?.areaName}: {item?.areaContact}</Typography>
                  )
                })
              }
            </Box>
            </Box>
                </>)
                               
            })
          }
          </>)
        }
        </>)
        }
      </Box>
    </Box>
  );
};

export default DivisionPage;
