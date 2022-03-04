import axios from "axios";

const upload = async (photo, userID) => {
  let formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", "rpttvov2");

  const response = await axios.post(
    "http://api.cloudinary.com/v1_1/pensieve/image/upload",
    formData
  );

  const url = response.data.secure_url;

  const res = await axios.post(
    `http://localhost:5000/users/photoUpload/${userID}`,
    {
      url,
    }
  );

  return res;
};

export default upload;
