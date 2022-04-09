import React, { useEffect, useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setUser, setActiveTab } = useContext(AuthContext);
  useEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("Logged Out");
      })
      .catch((error) => {
        // An error happened.
      });
    setLoggedIn(false);
    setActiveTab(0);
    setUser({  
      _id:"",
      Name:"", 
      Email:"",
      ID:"",
      ProfilePic:"",
      Address:"",
      Branch:"",
      MobileNumber:"",
      NickName:"",
      PhotoAlbum: [],
      ToRequests: {
        Email: "",
        IsRecieved: 0,
      },
      FromRequests: {
        Email: "",
        IsSent: 0,
      },
      });
    navigate("/");
  }, [navigate]);

  return <div></div>;
};

export default Logout;
