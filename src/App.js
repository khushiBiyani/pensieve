import { useState, useContext } from "react";
import { Button, Paper } from "@mui/material";

import "./App.css";
import CustomTheme from "./components/theme/theme";
import AuthContext from "./context/AuthContext";


function App() {
  const [dark, setDark] = useState(true);
  const {a, setA} = useContext(AuthContext);

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
        </Paper>



      </div>
    </CustomTheme>
  );
}

export default App;
