import React from "react";
import ReactDOM from "react-dom";
import Card from "../components/TestimonialForYou/Card";
import { Grid } from "@mui/material";

export default function TestByYou() {
  return (
    <Grid
      container
      justify="center"
      style={{ marginLeft: "300px", marginTop: "30px" }}
    >
      <Grid item p={2} xs={12} md={6}>
        <Card />
      </Grid>
      <Grid item p={2} xs={12} md={6}>
        <Card />
      </Grid>
      <Grid item p={2} xs={12} md={6}>
        <Card />
      </Grid>
    </Grid>
  );
}
