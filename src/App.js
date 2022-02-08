import { useState, useContext } from "react";
import { Button, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import {
  ChakraProvider,
  Portal,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";

import "./App.css";

import theme from "./components/Sidebar/theme/theme";
import routes from "./routes";
import CustomTheme from "./components/theme/theme";
import AuthContext from "./context/AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import { height } from "@mui/system";

function App() {
  const { dark, setDark } = useContext(AuthContext);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <CustomTheme dark={dark}>
      <ChakraProvider theme={theme} resetCss={false}>
        <Sidebar
          routes={routes}
          logoText={"PURITY UI DASHBOARD"}
          display="none"
        ></Sidebar>
      </ChakraProvider>
      {/* <div className="App" style={{}}>
        <Paper>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              setDark(!dark);
            }}
          >
            Toggle dark mode
          </Button>
          <Button color="primary" variant="contained" onClick={toggleColorMode}>
            asdasd
          </Button>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/home/1998">1998 home</Link> |{" "}
          <Link to="/home/2020">2020 home</Link>
        </Paper>
      </div> */}
      <Outlet />
    </CustomTheme>
  );
}

export default App;
