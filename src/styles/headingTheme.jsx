import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "secondary.400",
  fontFamily: "Rock Salt",
  fontWeight: "semibold",
});

export const headingTheme = defineStyleConfig({ baseStyle });
