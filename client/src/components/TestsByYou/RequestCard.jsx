import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import styles from "./RequestCard.module.css";

import React from "react";
import { Card, Typography } from "@mui/material";
import {Button} from "@mantine/core";

export default function RequestCard({
  requestEmail,
  requestName,
  requestNote,
  handleAccept,
  handleReject,
}) {
  return (
    <div>
      <Card sx={{ bgcolor: "white" }} className={styles.cardbackground}>
            <CardHeader 
              title={requestName} 
              subheader={requestEmail} 
              action={
                <IconButton 
                  aria-label="delete" 
                  onClick={() => handleReject(requestEmail)}
                >
                  <DeleteIcon/>
                </IconButton>
              }
            />
            <CardContent>
              <Typography className={styles.text}>{requestNote}</Typography>
            </CardContent>
          <CardActions>
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                sx={{
                  margin: "10px",
                }}
                // startIcon={<CheckBoxIcon/>}
                onClick={() => handleAccept(requestEmail)}
              >
                Write Testimonial
              </Button>
          </CardActions>
      </Card>
    </div>
  );
}
