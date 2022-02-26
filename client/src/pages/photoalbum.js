import { Grid } from "@mui/material";
import {useState} from "react";
import Axios from "axios";
import {Image} from 'cloudinary-react';
import '../components/Photoalbum/Photoalbum.css';

export default function PhotoAlbum() {
  
  const [imageSelected , setImageSelected]=useState("");
  const formData = new FormData();
  formData.append("file",imageSelected);
  formData.append("upload_preset","rpttvov2");
  
  Axios.post(
    "http://api.cloudinary.com/v1_1/pensieve/image/upload",
    formData
    ).then((response) => {
      console.log(response);
    });

  return (
    <Grid container spacing={1}>
      <Grid item xs={0} sm={3} />
      <Grid item xs={12} md={9}>
        <div className="userDetails" style={{ margin: "4vh 4vh" }}>
        <div>
        <label className="photoAlbumLabel">
      
    <input type="file" placeholder="Choose Image" onChange={(event) => {
      setImageSelected(event.target.files[0]);
    }} 
    /><span>Add Photo</span></label>
    {/* <button class = "button" onClick={PhotoAlbum}> Upload Image</button> */}

    <Image 
    style={{width: 200  , margin: 50}} cloudName='pensieve' publicId='https://res.cloudinary.com/pensieve/image/upload/v1645864984/k1qiuvoed97lxw5xra9i.jpg'></Image>
  {/* hard coded image for now*/}
  
  </div>
        </div>
      </Grid>
    </Grid>
  );
}


