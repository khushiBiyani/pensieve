import { Grid } from "@mui/material";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Image } from "cloudinary-react";
import "../components/Photoalbum/Photoalbum.css";
import UploadImageController from "../components/Photoalbum/imageUploader";
import UserUpdate from "../controllers/userUpdate";
import PhotoShowcase from "../components/Photoalbum/PhotoShowcase";
const PhotoAlbum = (props) => {
  const { user, setUser } = useContext(AuthContext);
  const [selectedImages, setSelectedImages] = useState(undefined);

  const selectImage = (event) => {
    setSelectedImages(event.target.files);
  };

  const update = async () => {
    const data = await UserUpdate(user._id);
    await setUser(data);
  };

  const uploadPhoto = async () => {
    // for Later Sprints

    // Array.from(selectedImages).map(async (image) => {
    //   const response = await UploadImageController.upload(image, user._id);
    // });
    const response = await UploadImageController(selectedImages[0], user._id);
  };

  const uploadPhotos = async () => {
    await uploadPhoto();
    update();
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
                // multiple={true}
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
            <PhotoShowcase photoLinks={user.PhotoAlbum} />
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
