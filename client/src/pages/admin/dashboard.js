import { AppShell, Navbar, Header, Text, Button, Image } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
// import { Menu2, ClipboardList, Logout, ListCheck } from "tabler-icons-react";

function Dashboard() {
  //   const { whatToShow, setWhatToShow, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header height={90} p="xs">
            <Text sx={{ fontSize: "50px" }}>
              {/* Header content */}Pensieve
            </Text>
          </Header>
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "40px" }}>Dashboard</Text>{" "}
          <DatePicker
            placeholder="Pick date"
            label="Select Deadline"
            required
            value={new Date(1654327019 * 1000)}
            size="lg"
          />
          <div>
            <Button
              color="dark"
              onClick={handleClick}
              sx={{ display: "inline" }}
            >
              Generate Yearbook
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {show === true && (
              <Text
                color="red"
                sx={{ display: "inline" }}
                weight={500}
                size="xl"
              >
                Sent.
              </Text>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Text sx={{ fontSize: "25px", display: "inline" }}>
            Total Number of Testimonials: &nbsp;
            <Text sx={{ fontSize: "35px", display: "inline", color: "red" }}>
              149
            </Text>
          </Text>
          <Text sx={{ fontSize: "25px", display: "inline" }}>
            Total Number of Users: &nbsp;
            <Text sx={{ fontSize: "35px", display: "inline", color: "red" }}>
              30
            </Text>
          </Text>
          <Text sx={{ fontSize: "25px", display: "inline" }}>
            Total Number of Pictures Uploaded: &nbsp;
            <Text sx={{ fontSize: "35px", display: "inline", color: "red" }}>
              56
            </Text>
          </Text>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            // alignItems: "center",
            marginTop: "100px",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          <Image
            radius="md"
            src="https://res.cloudinary.com/pensieve/image/upload/v1651584499/chart2_woub7d.png"
            alt="Random unsplash image"
          />
          <Image
            radius="md"
            src="https://res.cloudinary.com/pensieve/image/upload/v1651584805/chart1_g4nnwr.jpg"
            alt="Random unsplash image"
          />
          <Image
            radius="md"
            src="https://res.cloudinary.com/pensieve/image/upload/v1651584498/Step_By_Step_Project_Planning_Infographic_Graph_1_kwujql.png"
            alt="Random unsplash image"
          />
        </div>
      </AppShell>
      {/* Dashboard */}
    </>
  );
}

export default Dashboard;
