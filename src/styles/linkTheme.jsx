import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {
    color: "secondary.500",
    _dark: {
      color: "gray.50",
    },
  },
});

export default Link;
