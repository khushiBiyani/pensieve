import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import backgroundImage from "../resources/background.jpg";
import Google from "../resources/google.png";
import Github from "../resources/github.png";
import { Box, Grid, Typography, Button } from "@mui/material";

export default function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const onClick = () => {
    setLoggedIn(true);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "100% 100%",
        color: "white",
      }}
    >
      <Grid container sx={{ margin: "0px" }}>
        <Grid
          item
          sm={12}
          sx={{
            height: "50vh",
            textAlign: "right",
            paddingTop: "15vh",
            paddingRight: "20px",
            width: "100vw",
          }}
        >
          <Typography
            fontSize="85px"
            sx={{ fontWeight: "bold", display: "inline", marginBottom: "0" }}
          >
            Pensieve{" "}
            <i
              class="fas fa-graduation-cap"
              style={{ color: "#464445" }}
              size="lg"
            ></i>
          </Typography>
          <Box
            sx={{
              width: "10vw",
              height: "7vw",
              display: "inline-block",
            }}
          ></Box>
          <br />
          <Typography fontSize="20px" sx={{ display: "inline" }}>
            Personalized Yearbook at Your Footsteps
          </Typography>
          <Box
            sx={{
              width: "16%",
              height: "0",
              display: "inline-block",
            }}
          ></Box>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{ paddingTop: "15vh", paddingLeft: "20px", width: "100vw" }}
        >
          {" "}
          <Box
            sx={{
              width: "10vw",
              height: "0",
              display: "inline-block",
            }}
          ></Box>
          <Button
            variant="contained"
            color="neutral"
            sx={{ padding: "10px 20px", borderRadius: "15px" }}
            onClick={onClick}
          >
            <img src={Google} style={{ height: "25px" }} alt="google"></img>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                letterSpacing: "1px",
                lineHeight: "30px",
                textAlign: "center",
              }}
            >
              &nbsp;&nbsp;Login with BITSmail
            </Typography>
          </Button>
          <br />
          <Box
            sx={{
              width: "16vw",
              height: "10vh",
              display: "inline-block",
            }}
          ></Box>
          <a href="https://www.github.com">
            <img
              src={Github}
              style={{ height: "40px", filter: "invert(1)" }}
              alt="github"
            ></img>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}

{
  /* <i class="fa-solid fa-graduation-cap"></i> */
}
