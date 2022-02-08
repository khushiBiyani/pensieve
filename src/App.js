import { useState, useContext } from "react";
import { Button, Paper } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

import "./App.css";

import CustomTheme from "./components/theme/theme";
import AuthContext from "./context/AuthContext";

function App() {
  const [dark, setDark] = useState(true);
  const { a, setA } = useContext(AuthContext);

  return (
    <CustomTheme dark={dark}>
      <div className="App">
        <Paper>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              console.log(a);
              setDark(!dark);
            }}
          >
            Toggle dark mode
          </Button>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/home/1998">1998 home</Link> |{" "}
          <Link to="/home/2020">2020 home</Link>
        </Paper>
      </div>
      <Outlet />
    </CustomTheme>
  );
}

export default App;
