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
        _hover: {
          bgColor: "gray.200",
          borderColor: "gray.200",
          color: "gray.700",
        },
      },
    },
    solid: {
      bg: "gray.700",
      color: "gray.50",
      _hover: {
        bgColor: "gray.400",
      },
      _dark: {
        bgColor: "gray.600",
        _hover: {
          color: "gray.700",
          bgColor: "gray.200",
        },
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

export default Button;
