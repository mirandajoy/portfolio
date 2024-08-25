import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";

import "./Header.scss";

function Header({ bgColor, color, visibleSection, logoColor }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuColor = useColorModeValue("black", "white");

  let location = useLocation();
  const currentPath = location.pathname;
  const currentHash = location.hash;
  const navigate = useNavigate();

  const updateNav = () => {
    currentPath === "/" && navigate(`/#${visibleSection}`);
  };

  useEffect(() => {
    updateNav();
  }, [visibleSection]);

  return (
    <Box as="header">
      <Flex align="center" justify="space-between" p={["4", "5", "5"]} bgColor={bgColor} color={color}>
        <Heading
          as="h3"
          size="md"
          fontFamily="Rock Salt"
          p={["0", "1", "2"]}
          display={["none", "none", "block"]}
          color={logoColor}
        >
          Miranda Neerhof
        </Heading>
        <Heading as="h3" size="md" fontFamily="Rock Salt" display={["block", "block", "none"]} color={logoColor}>
          MN
        </Heading>
        <HStack spacing="1" display={["none", "none", "block"]}>
          <ChakraLink
            as={HashLink}
            to="/#home"
            fontWeight="semibold"
            px="4"
            py="1"
            borderRadius="md"
            color={color ? color : "gray.50"}
            bgColor={currentHash === "#home" ? "brand.700" : ""}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={HashLink}
            to="/#about"
            fontWeight="semibold"
            px="4"
            py="1"
            borderRadius="md"
            color={color ? color : "gray.50"}
            bgColor={currentHash === "#about" ? "brand.700" : ""}
          >
            About
          </ChakraLink>
          <ChakraLink
            as={HashLink}
            to="/#mywork"
            fontWeight="semibold"
            px="4"
            py="1"
            borderRadius="md"
            color={color ? color : "gray.50"}
            bgColor={currentHash === "#mywork" ? "brand.700" : ""}
          >
            Projects
          </ChakraLink>
          <ChakraLink
            as={HashLink}
            to="/#contact"
            fontWeight="semibold"
            px="4"
            py="1"
            borderRadius="md"
            color={color ? color : "gray.50"}
            bgColor={currentHash === "#contact" ? "brand.700" : ""}
          >
            Contact
          </ChakraLink>
          <IconButton ml="8" color="brand.800" border="1px" onClick={toggleColorMode} _hover={{ color: "brand.300" }}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </HStack>
        <Menu>
          <MenuButton as={Button} display={["block", "block", "none"]} pt={0}>
            <ChevronDownIcon boxSize={10} />
          </MenuButton>
          <MenuList color={menuColor}>
            <MenuItem as={HashLink} to="/#home">
              Home
            </MenuItem>
            <MenuItem as={HashLink} to="/#about">
              About
            </MenuItem>
            <MenuItem as={HashLink} to="/#mywork">
              Projects
            </MenuItem>
            <MenuItem as={HashLink} to="/#contact">
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default Header;
