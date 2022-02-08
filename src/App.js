import { useState, useContext, createRef } from "react";
import { Button, Paper, Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import {
  ChakraProvider,
  Portal,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import theme from "./components/Sidebar/theme/theme";
import routes from "./routes";
import CustomTheme from "./components/theme/theme";
import AuthContext from "./context/AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPanel from "./layout/MainPanel";
import { height } from "@mui/system";

function App() {
  const { dark, setDark } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mainPanel = createRef();
  return (
    <CustomTheme dark={dark}>
      <Grid container spacing={1}>
        <Grid item xs={0} sm={3}>
          <ChakraProvider theme={theme}>
            <Sidebar routes={routes} display="none"></Sidebar>
          </ChakraProvider>
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={1}>
            <Grid item xs={12} style={{ height: "15vh", width: "100%" }}>
              <Navbar
                onOpen={onOpen}
                logoText={"PURITY UI DASHBOARD"}
                brandText={""} // What to put
                secondary={false}
                fixed={true}
              />
            </Grid>
            <Grid item>
              {/* <div className="App">
                <Paper style={{ height: "100vh" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      setDark(!dark);
                    }}
                  >
                    Toggle dark mode
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={toggleColorMode}
                  >
                    asdasd
                  </Button>
                  <Link to="/home">Home</Link> | <Link to="/about">About</Link>{" "}
                  | <Link to="/home/1998">1998 home</Link> |{" "}
                  <Link to="/home/2020">2020 home</Link>
                </Paper>
              </div> */}
            </Grid>
          </Grid>
        </Grid>
        <Outlet />
      </Grid>
    </CustomTheme>
  );
}

export default App;
