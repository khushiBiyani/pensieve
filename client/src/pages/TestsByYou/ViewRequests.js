import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";

import RequestCard from "../../components/TestsByYou/RequestCard";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";

export default function ViewRequests({ onAccept, onReject }) {
  const { user, setUser } = useContext(AuthContext);
  const [requests, setRequests] = useState(user.FromRequests);

  const handleAccept = (senderEmail) => {
    onAccept(senderEmail);
  };

  const handleReject = async (senderEmail) => {
    // console.log("rejecting", senderEmail);
    // Update FromRequests array
    let requestObj = user.FromRequests.find((req) => req.Email === senderEmail);
    if (requestObj) {
      // need to update the context variable
      var updatedUser = user;
      var index = updatedUser.FromRequests.indexOf(requestObj);
      updatedUser.FromRequests.splice(index, 1);

      // update in database
      const putResponse = await axios
        .put("http://localhost:5000/users/update/" + user._id, {
          FromRequests: updatedUser.FromRequests,
        })
        .then(() => {
          setUser(updatedUser);
          // console.log("updated");
          setRequests(updatedUser.FromRequests);
        });
    }
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{
          // marginLeft: "300px",
          // eslint-disable-next-line no-useless-computed-key
          ["@media (max-width:960px)"]: {
            // display: "none",
            marginLeft: "-70px",
          },
          marginTop: "30px",
          // marginRight: "30px",
          // maxWidth: "83%",
        }}
      >
        {requests.length === 0 && (
          <Typography sx={{ color: "white", margin: "20px 20px" }}>
            No requests to show.
          </Typography>
        )}
        {requests &&
          requests.map((request) => (
            <Grid
              item
              xs={12}
              key={request.Email}
              sx={{ marginBottom: "20px" }}
            >
              <RequestCard
                requestEmail={request.Email}
                requestName={request.Name}
                requestNote={request.Message}
                handleReject={handleReject}
                handleAccept={handleAccept}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
