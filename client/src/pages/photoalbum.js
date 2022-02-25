import { Grid, Typography } from "@mui/material";
export default function PhotoAlbum() {
  console.log("hi");
  return (
    <Grid container spacing={1}>
      <Grid item xs={0} sm={3} />
      <Grid item xs={12} md={9}>
        <div className="userDetails" style={{ margin: "4vh 4vh" }}>
          <h1 style={{ color: "#ffffff" }}>asdasdas</h1>
          <input type="file" />
        </div>
      </Grid>
    </Grid>
  );
}
