import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";

import RequestCard from "../../components/TestsByYou/RequestCard";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";

export default function ViewRequests({ onAccept, onReject }) {
  const { user, setUser } = useContext(AuthContext);
  const [requests, setRequests] = useState(user.ToRequests);

  const handleAccept = (senderEmail) => {
    onAccept(senderEmail);
  };

  const handleReject = async (senderEmail) => {
    // console.log("rejecting", senderEmail);
    // Update ToRequests array
    let requestObj = user.ToRequests.find((req) => req.Email === senderEmail);
    if (requestObj) {
      // need to update the context variable
      var updatedUser = user;
      var index = updatedUser.ToRequests.indexOf(requestObj);
      updatedUser.ToRequests.splice(index, 1);

      // update in database
      const putResponse = await axios
        .put("http://localhost:5000/users/update/" + user._id, {
          ToRequests: updatedUser.ToRequests,
        })
        .then(() => {
          setUser(updatedUser);
          // console.log("updated");
          setRequests(updatedUser.ToRequests);
        });
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {!requests && (
          <Typography sx={{ color: "white", margin: "20px 20px" }}>
            No requests to show.
          </Typography>
        )}
        {requests &&
          requests.map((request) => (
            <Grid item xs={12} key={request.Email}>
              <RequestCard
                requestEmail={request.Email}
                requestName={"Requester's name"}
                requestNote={"Some cute note."}
                handleReject={handleReject}
                handleAccept={handleAccept}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
