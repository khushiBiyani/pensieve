import React, { useEffect, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("Logged Out");
      })
      .catch((error) => {
        // An error happened.
      });
    setLoggedIn(false);
    navigate("/");
  }, [navigate]);

  return <div></div>;
};

export default Logout;
