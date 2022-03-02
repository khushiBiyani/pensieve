import { Grid } from "@mui/material";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Image } from "cloudinary-react";
import "../components/Photoalbum/Photoalbum.css";
import UploadImageController from "../components/Photoalbum/imageUploader";

const PhotoAlbum = (props) => {
  const { user } = useContext(AuthContext);
  const [selectedImages, setSelectedImages] = useState(undefined);

  const [message, setMessage] = useState("");
  const selectImage = (event) => {
    setSelectedImages(event.target.files);
  };

  const uploadPhotos = async () => {
    // console.log("started");

    // console.log(selectedImages);

    // Convert FileList into array then for every image, upload it.
    Array.from(selectedImages).map(async (image) => {
      const response = await UploadImageController.upload(image)
        .then(async (response) => {
          // the uploaded image url is response.data.secure_url
          const url = response.data.secure_url;
          // console.log(url);
          const res = await axios.post(
            `http://localhost:5000/users/photoUpload/${user.DocId}`,
            { url }
          );
          // console.log(res);
          // console.log(response);
          setMessage(response.data.message);
        })
        .catch(() => {
          setMessage("Could not upload the file!");
        });
    });

    setSelectedImages(undefined);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={0} sm={3} />
      <Grid item xs={12} md={9}>
        <div className="userDetails" style={{ margin: "4vh 4vh" }}>
          <div>
            <label className="photoAlbumLabel">
              <input
                type="file"
                placeholder="Choose Image"
                multiple={true}
                onInput={selectImage}
              />
              <span>Add Photo</span>
            </label>
            <button
              className="photoAlbumLabel"
              disabled={!selectedImages}
              onClick={uploadPhotos}
            >
              Upload
            </button>
            <div style={{ color: "red" }} role="alert">
              {message}
            </div>
            {/* <Image
              style={{ width: 200, margin: 50 }}
              cloudName="pensieve"
              publicId="https://res.cloudinary.com/pensieve/image/upload/v1645864984/k1qiuvoed97lxw5xra9i.jpg"
            ></Image> */}
            {/* hard coded image for now*/}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PhotoAlbum;
