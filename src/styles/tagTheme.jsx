import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "#e3b626",
    bg: "secondary.100",
    color: "gray.900",
    fontWeight: "bold",
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
