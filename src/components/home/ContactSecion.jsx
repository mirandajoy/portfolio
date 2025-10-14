import { Box, Link as ChakraLink, Flex, Heading, Text } from "@chakra-ui/react";

function ContactSection() {
  return (
    <>
      <Heading as="h2" size="xl" pb={["1", "2", "4"]}>
        Contact
      </Heading>
      <Flex justify="space-between">
        <Box>
          <Text fontSize="md" marginY="3">
            You can reach me at:{" "}
            <ChakraLink href="mailto:miranda.neerhof@gmail.com" isExternal fontWeight="semibold">
              miranda.neerhof@gmail.com
            </ChakraLink>
          </Text>
          <Text fontSize="md" marginY="3">
            Connect with me on:
            <ChakraLink href="https://www.linkedin.com/in/mirandaneerhof/" isExternal px="2" fontWeight="semibold">
              LinkedIn
            </ChakraLink>
            |
            <ChakraLink href="https://github.com/mirandajoy/" isExternal px="2" fontWeight="semibold">
              GitHub
            </ChakraLink>
          </Text>
        </Box>
        {/* <Box>
              <Button
                as="a"
                colorScheme="gray"
                variant="outline"
                leftIcon={<DownloadIcon />}
                href={resume}
                download="miranda_neerhof_resume.pdf"
              >
                Download My Resume
              </Button>
            </Box> */}
      </Flex>
    </>
  );
}

export default ContactSection;
