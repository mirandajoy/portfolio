import { ChakraProvider, extendTheme, ColorModeScript, defineStyleConfig } from "@chakra-ui/react";
import { cardTheme } from "./styles/cardTheme";
import { tagTheme } from "./styles/tagTheme";
import { headingTheme } from "./styles/headingTheme";
import Button from "./styles/buttonTheme.jsx";
import Link from "./styles/linkTheme.jsx";
import { mode } from "@chakra-ui/theme-tools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const colors = {
  brand: {
    50: "#eaf8f2",
    100: "#cfe3da",
    200: "#b2cfc2",
    300: "#93bca9",
    400: "#75a992",
    500: "#5b8f78",
    600: "#466f5d",
    700: "#324f43",
    800: "#1c3027",
    900: "#03110b",
  },
  secondary: {
    50: "#e9f0ff",
    100: "#c7d1ec",
    200: "#a4b3da",
    300: "#8195ca",
    400: "#5e76ba",
    500: "#455da1",
    600: "#35487e",
    700: "#25345b",
    800: "#151f39",
    900: "#050a19",
  },
  gray: {
    50: "#e8e8e8",
    100: "#d1d2d2",
    200: "#babbbb",
    300: "#8c8e8e",
    400: "#757777",
    500: "#5e6060",
    600: "#474949",
    700: "#303333",
    800: "#191c1c",
    900: "#020303",
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "Open Sans",
      bg: mode("gray.50", "gray.800")(props),
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("brand.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("brand.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components: {
    Heading: headingTheme,
    Tag: tagTheme,
    Card: cardTheme,
    Link,
    Button,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
