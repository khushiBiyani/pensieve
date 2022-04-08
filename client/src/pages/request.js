import { Grid } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Select, Container, Textarea, Button, Text } from "@mantine/core";
import UserUpdate from "../controllers/userUpdate";
import AuthContext from "../context/AuthContext";
import RequestCard from "../components/Requests/RequestCard";
import contacts from "../contacts";
const emails = contacts.map((contact) => contact.Email);

export default function RequestTest() {
  const { user, setUser } = useContext(AuthContext);
  const [targetEmail, setTargetEmail] = useState("");
  const [targetContent, setTargetContent] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");
  const handleChange = (e) => {
    setTargetEmail(e);
  };
  const handleContentChange = (e) => {
    setTargetContent(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/users/createReq", {
      id: user._id,
      from: user.Email,
      to: targetEmail,
      message: targetContent,
      name: user.Name,
    });
    console.log(response);
    await update();
    console.log(user);
    setTargetContent("");

    // setIsSubmitted(response.)
  };

  const update = async () => {
    const data = await UserUpdate(user._id);
    await setUser(data);
  };

  return (
    <>
      <Container sx={{ margin: "auto" }}>
        <Select
          placeholder="BITSmail"
          label="Email"
          required
          size="lg"
          searchable
          nothingFound="No options"
          maxDropdownHeight={280}
          data={emails}
          onChange={handleChange}
          value={targetEmail}
          sx={{
            width: "40vw",
            label: { color: "white" },
            input: { textAlign: "center" },
            margin: "auto",
            marginTop: "20px",
            // eslint-disable-next-line no-useless-computed-key
            ["@media (max-width:960px)"]: {
              width: "80%",
              margin: "20px 0",
            },
          }}
        />
        <Textarea
          placeholder="Drop a Request Note."
          label="Content"
          autosize
          required
          size="lg"
          // minRows={3}
          value={targetContent}
          onChange={handleContentChange}
          sx={{
            width: "40vw",
            margin: "auto",
            marginTop: "20px",
            label: { color: "white" },
            // eslint-disable-next-line no-useless-computed-key
            ["@media (max-width:960px)"]: {
              width: "80%",
              margin: "20px 0",
            },
          }}
        />
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          sx={{
            display: "block",
            margin: "auto",
            marginTop: "30px",
          }}
          onClick={handleSubmit}
        >
          Request Testimonial
        </Button>
      </Container>{" "}
    </>
  );
}
