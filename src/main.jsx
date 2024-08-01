import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
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
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
