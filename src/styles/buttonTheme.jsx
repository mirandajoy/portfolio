import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "3xl",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    ghost: {
      color: "gray.700",
      _hover: {
        bgColor: "gray.400",
        color: "gray.50",
      },
      _dark: {
        color: "gray.50",
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "gray.700",
      color: "gray.700",
      _hover: {
        bgColor: "gray.400",
        borderColor: "gray.400",
        color: "gray.50",
      },
      _dark: {
        borderColor: "gray.200",
        color: "gray.200",
      },
    },
    solid: {
      bg: "gray.700",
      color: "gray.50",
      _hover: {
        bgColor: "gray.400",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export default Button;
