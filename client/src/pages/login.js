import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import backgroundImage from "../resources/background.jpg";
import Google from "../resources/google.png";
import Github from "../resources/github.png";
import { Box, Grid, Typography, Button } from "@mui/material";

import axios from "axios";

export default function Login() {
  const { setLoggedIn, user, setUser } = useContext(AuthContext);
  const onClick = async () => {
    // setLoggedIn(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user.
        const User = result.user;
        setLoggedIn(true);
        let ID = "";
        // GET Document ID
        fetch("http://localhost:5000/users/email/" + User.email, {
          method: "GET",
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            ID = data;
            if (!ID) {
              const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  Name: User.displayName,
                  Email: User.email,
                  ID: "",
                  ProfilePic: "",
                  Address: "",
                  Branch: "",
                  MobileNumber: "",
                  NickName: "",
                  PhotoAlbum: [""],
                  ToRequests: {
                    Email: "",
                    IsRecieved: 0,
                  },
                  FromRequests: {
                    Email: "",
                    IsSent: 0,
                  },
                }),
              };
              fetch("http://localhost:5000/users/add", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                  console.log(data._id);
                  ID = data._id;
                  setUser({ Name: user.Name, Email: user.Email, DocId: ID });
                });
            }
            setUser({ Name: User.displayName, Email: User.email, DocId: ID });
          })
          .catch((err) => console.log(err));

        //console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
