import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    backgroundColor: "gray.50",
    boxShadow: "none",
    color: "gray.800",
    borderColor: "gray.800",
    _dark: {
      backgroundColor: "gray.900",
      color: "gray.100",
    },
  },
  header: {
    fontFamily: "Open Sans",
    fontSize: "8",
    paddingBottom: "20px",
  },
});

const sizes = {
  md: definePartsStyle({
    container: {
      borderRadius: "8px",
      borderColor: "gray.800",
    },
  }),
};

export const cardTheme = defineMultiStyleConfig({ baseStyle });
