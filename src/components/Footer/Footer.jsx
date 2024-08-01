import { Box, useColorModeValue } from "@chakra-ui/react";
import "./Footer.scss";

function Footer() {
  const bgColor = useColorModeValue('blue.50', 'blue.800');

  return (
    <Box as="footer" textAlign="center" p="9" backgroundColor={bgColor}>
      <p>&copy; 2024 Miranda Neerhof. All rights reserved.</p>
    </Box>
  );
}

export default Footer;
