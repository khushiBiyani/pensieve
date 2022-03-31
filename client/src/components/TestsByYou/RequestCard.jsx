import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import React from "react";
import { Button, Card, Grid, Typography } from "@mui/material";

export default function RequestCard({
  requestEmail,
  requestName,
  requestNote,
  handleAccept,
  handleReject,
}) {
  return (
    <div>
      <Card variant="outlined" sx={{ bgcolor: "white" }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <CardHeader title={requestName} subheader={requestEmail} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CardContent>
              <Typography>{requestNote}</Typography>
            </CardContent>
          </Grid>
          <CardActions>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                color="success"
                size="small"
                onClick={() => handleAccept(requestEmail)}
              >
                Accept
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleReject(requestEmail)}
              >
                Reject
              </Button>
            </Grid>
          </CardActions>
        </Grid>
      </Card>
    </div>
  );
}
