import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const colors = {
  brand: {
    900: "#b0ddfa", //pale blue
    800: "#68baf5", //bright blue
    700: "#f9c22e", //yellow
    600: "#2fa0e7", //deeper blue
    500: "#2680b9", //dark blue
  }
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
