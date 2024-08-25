import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: "secondary.100",
    color: "gray.900",
    fontWeight: "bold",
    _dark: {
      bg: "secondary.200",
    },
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
