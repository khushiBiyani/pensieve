import { Tabs } from "@mantine/core";
// import { Photo, MessageCircle, Settings } from "tabler-icons-react";
import { Grid } from "@mui/material";
import ViewAll from "./ViewAll";
import ViewRequests from "./ViewRequests";
import CreateTest from "./createTestimonial";
export default function TestForYou() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={0} sm={3} />
      <Grid
        item
        xs={12}
        md={9}
        sx={{
          marginTop: "-50px",
          position: "absolute",
          top: "100px",
          left: "300px",
          width: "100%",
          // eslint-disable-next-line no-useless-computed-key
          ["@media (max-width:960px)"]: {
            // display: "none",
            left: "30%",
          },
        }}
      >
        <Tabs color="cyan" tabPadding="md" variant="pills" sx={{}}>
          <Tabs.Tab
            sx={{ paddingLeft: "15px", paddingRight: "15px" }}
            label="Write"
          >
            <CreateTest />
          </Tabs.Tab>
          <Tabs.Tab
            sx={{ paddingLeft: "15px", paddingRight: "15px" }}
            label="Requests"
          >
            <ViewRequests />
          </Tabs.Tab>
          <Tabs.Tab
            sx={{ paddingLeft: "15px", paddingRight: "15px" }}
            label="View All"
          >
            <ViewAll />
          </Tabs.Tab>
        </Tabs>
      </Grid>
    </Grid>
  );
}
