import AuthContext from "../../context/AuthContext";
import { useContext, useState } from "react";

import RequestCard from "../../components/TestsByYou/RequestCard";
import { Container, Grid, Typography } from "@mui/material";

export default function ViewRequests({ onAccept, onReject }) {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState(user.ToRequests);

  const handleAccept = (senderEmail) => {
    onAccept(senderEmail);
  };

  const handleReject = (senderEmail) => {
    console.log("rejecting", senderEmail);
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
