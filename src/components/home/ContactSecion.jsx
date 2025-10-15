import { Box, Link as ChakraLink, Flex, Heading, Text, Stack } from "@chakra-ui/react";

function ContactSection() {
  return (
    <Stack spacing="8">
      <Heading as="h2" size="xl">
        Contact
      </Heading>
      <Flex justify="space-between">
        <Stack spacing="3">
          <Text fontSize="md">
            You can reach me at:{" "}
            <ChakraLink href="mailto:miranda.neerhof@gmail.com" isExternal fontWeight="semibold">
              miranda.neerhof@gmail.com
            </ChakraLink>
          </Text>
          <Text fontSize="md">
            Connect with me on:
            <ChakraLink href="https://www.linkedin.com/in/mirandaneerhof/" isExternal px="2" fontWeight="semibold">
              LinkedIn
            </ChakraLink>
            |
            <ChakraLink href="https://github.com/mirandajoy/" isExternal px="2" fontWeight="semibold">
              GitHub
            </ChakraLink>
          </Text>
        </Stack>
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
    </Stack>
  );
}

export default ContactSection;
