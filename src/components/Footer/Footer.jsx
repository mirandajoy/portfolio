import { Box } from "@chakra-ui/react";
import "./Footer.scss";

function Footer() {
  return (
    <Box as="footer" textAlign="center" p="9" backgroundColor="gray.50">
      <p>&copy; 2024 Miranda Neerhof. All rights reserved.</p>
    </Box>
  );
}

export default Footer;
