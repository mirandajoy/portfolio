import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SkillsBlock from "./SkillsBlock";

function AboutSection() {
  return (
    <>
      <Heading as="h2" size="xl" pb={["1", "2", "4"]} w={["100%", "75%", "100%"]} m="auto">
        About Me
      </Heading>
      <Flex
        align="flex-start"
        justify={["center", "center", "space-between"]}
        gap={["4", "4", "9"]}
        flexWrap={["wrap", "wrap", "nowrap"]}
      >
        <Box flexBasis={["100%", "75%", "60%"]}>
          <Text fontSize="md" marginY="3">
            I've been working in the tech industry for the past 7 years. I got my start as a UX Designer and have worked
            for the past 5+ years as a Product Manager.
          </Text>
          <Text fontSize="md" marginY="3">
            Over the years, I have built out various technical skills from building React Components to support UI
            implementation, to researching APIs to uncover solution opportunities, and becoming proficient with SQL to
            drive problem-discovery and track impact.
          </Text>
          <Text fontSize="md" marginY="3">
            Completing Brainstation's intensive full-stack engineering bootcamp allowed me to bridge my various skills
            together and deepen my capabilities. I am excited to leverage my well-rounded skillset to contribute to a
            team as a Software Engineer.
          </Text>
        </Box>
        <SkillsBlock />
      </Flex>
    </>
  );
}

export default AboutSection;
