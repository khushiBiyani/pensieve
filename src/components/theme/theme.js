import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Refer to link below to customize themes
// Add different names like neutral and their primary color will be used.
const CustomTheme = (props) => {
  const lightTheme = createTheme({
    palette: {          
      type: "light",
      primary: {
        main: "#0971f1",
      },
      neutral: {
        main: "#14718B",
        contrastText: "#fff",
      },
      background: {
        default: "#ffffff",
        paper: "#f5f5f5",
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#003300",
      },
      neutral: {
        main: "#14718B",
        contrastText: "#fff",
      },
      background: {
        default: "#000000",
        paper: "#ffffAA",
      },
    },
  });

  return (
    <ThemeProvider theme={props.dark ? darkTheme : lightTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default CustomTheme;

// Reference
// https://mui.com/customization/default-theme/