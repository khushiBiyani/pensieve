import axios from "axios";

const upload = async (photo, onUploadProgress) => {
  let formData = new FormData();
  formData.append("file", photo);
  formData.append("upload_preset", "rpttvov2");
  console.log("uploading");
  const response = await axios.post(
    "http://api.cloudinary.com/v1_1/pensieve/image/upload",
    formData
  );
  console.log(response);
  return response;
};
const getFiles = () => {
  return axios.get("/files");
};
export default {
  upload,
  getFiles,
};
