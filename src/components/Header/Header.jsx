import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  IconButton,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import "./Header.scss";

function Header({ bgColor, color, visibleSection }) {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <Flex align="center" justify="space-between" p={["4", "6", "9"]} bgColor={bgColor} color={color}>
        <Heading as="h3" size="md" fontFamily="Rock Salt" display={["none", "none", "block"]}>
          Miranda Neerhof
        </Heading>
        <Heading as="h3" size="md" fontFamily="Rock Salt" display={["block", "block", "none"]}>
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
            bgColor={currentHash === "#home" ? "blue.600" : ""}
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
            bgColor={currentHash === "#about" ? "blue.600" : ""}
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
            bgColor={currentHash === "#mywork" ? "blue.600" : ""}
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
            bgColor={currentHash === "#contact" ? "blue.600" : ""}
          >
            Contact
          </ChakraLink>
          <IconButton ml="8" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </HStack>
        <Menu>
          <MenuButton as={Button} display={["block", "block", "none"]}>
            <ChevronDownIcon />
          </MenuButton>
          <MenuList color="black">
            <MenuItem as={HashLink} to="/#home">
              Home
            </MenuItem>
            <MenuItem as={HashLink} to="/#about">
              About
            </MenuItem>
            <MenuItem as={HashLink} to="/#projects">
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
