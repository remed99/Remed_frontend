import { Box, Typography } from "@mui/material";
import Medicine from "../asset/pharma.png";

const AboutUs = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          margin: "25px",
          alignItems: "center",
          width: {
            xs: "80%",
            sm: "80%",
            md: "50%"
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            alignItems: "center",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          About Us
        </Typography>
        <Box sx={{ alignItems: "center"}}>
          <Typography variant="h6">
            The world of medicines can be confusing and hard to understand. Our
            innovative platform is designed to simplify your search and empower
            you to make informed decisions about your medications. Whether
            you're looking for the generic name of a brand-name medicine,
            exploring the different brands of a specific generic drug, or
            identifying the company that produces a particular medication, our
            comprehensive database is your all-in-one resource.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: { xs: "80%", sm: "80%", md: "50%" } }}>
        <img src={Medicine} style={{ width: "80%" }} />
      </Box>
    </Box>
  );
};

export default AboutUs;
