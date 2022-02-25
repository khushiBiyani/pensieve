import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import Address from "../components/About/Address";
import Bitsid from "../components/About/Bitsid";
import Branch from "../components/About/Branch";
import Dual from "../components/About/Dual";
import Edit from "../components/About/Edit";
import ImgUpload from "../components/About/ImgUpload";
import Nick from "../components/About/Nick";
import Phno from "../components/About/Phno";
import Profile from "../components/About/Profile";
import "../components/About/about.css";

export default function About() {
  const [name, setName] = useState("Jack Sparrow");
  const [email, setEmail] = useState("fxxxx@hyderabad.bits-pilani.ac.in");
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"
  );
  const [bitsid, setBitsid] = useState("");
  const [address, setAddress] = useState("");
  const [branch, setBranch] = useState("");
  const [dual, setDual] = useState("");
  const [phno, setPhno] = useState("");
  const [nick, setNick] = useState("");
  const [active, setActive] = useState("edit");

  const handleSubmit = (e) => {
    // Clicking submit will just toggle between edit and profile mode
    // Actual changes in state variables are handled by using onChange() methods
    e.preventDefault();
    let activeP = active === "edit" ? "profile" : "edit";
    setActive(activeP);
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result); // this is for the actual image
      setFile(e.target.files[0]);
      console.log(file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={0} sm={3} />
      <Grid item xs={12} md={9}>
        <div className="userDetails" style={{ margin: "4vh 4vh" }}>
          {active === "edit" ? (
            <Edit onSubmit={handleSubmit}>
              <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
              <Typography className="name">Name: {name}</Typography>
              <Typography className="email">Email: {email}</Typography>
              <div className="first-segment">
                <Bitsid
                  onChange={(e) => {
                    setBitsid(e.target.value);
                  }}
                  value={bitsid}
                />
                <Phno
                  onChange={(e) => {
                    setPhno(e.target.value);
                  }}
                  value={phno}
                />
              </div>
              <div className="second-segment">
                <Branch
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                  value={branch}
                />
                {branch.includes("B") ? (
                  <Dual
                    onChange={(e) => {
                      setDual(e.target.value);
                    }}
                    value={dual}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <Address
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
              <Nick
                onChange={(e) => {
                  setNick(e.target.value);
                }}
                value={nick}
              />
            </Edit>
          ) : (
            <Profile
              onSubmit={handleSubmit}
              src={imagePreviewUrl}
              name={name}
              email={email}
              bitsid={bitsid}
              address={address}
              branch={branch}
              dual={dual}
              phno={phno}
              nick={nick}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
}
