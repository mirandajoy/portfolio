import { Box, Flex, Heading, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import "./Header.scss";

function Header({bgColor, color}) {
  return (
    <Box as="header">
      <Flex justify="space-between" p="9" bgColor={bgColor} color={color}>
        <Heading as="h3" size="md" fontFamily="Bad Script">
          Miranda Neerhof
        </Heading>
        <HStack spacing="8">
          <ChakraLink as={HashLink} to="/" fontWeight="semibold">
            Home
          </ChakraLink>
          <ChakraLink as={HashLink} to="/#about" fontWeight="semibold">
            About
          </ChakraLink>
          <ChakraLink as={HashLink} to="/#mywork" fontWeight="semibold">
            Projects
          </ChakraLink>
          <ChakraLink as={HashLink} to="/#contact" fontWeight="semibold">
            Contact
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Header;
