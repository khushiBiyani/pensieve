import { Grid } from "@mui/material";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import RequestCard from "../components/Requests/RequestCard";

export default function RequestTest() {
  const { user } = useContext(AuthContext);
  return (
    <Grid container>
      <Grid item p={2} xs={12} md={6}>
        <RequestCard />
      </Grid>
      <Grid item p={2} xs={12} md={6}>
        <RequestCard />
      </Grid>

      {/* {user.FromRequests.map((test) => {
        <Grid item>
          <RequestCard />
        </Grid>;
      })} */}
    </Grid>
  );
}
