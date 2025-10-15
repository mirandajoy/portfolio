import { Stack, VStack, Heading, Text } from "@chakra-ui/react";
import SkillsBlock from "./SkillsBlock";

function AboutSection() {
  return (
    <Stack spacing="8" align={["center", null, null, null, "flex-start"]}>
      <Heading as="h2" size="xl">
        About Me
      </Heading>
      <VStack
        align="flex-start"
        justify={["center", null, null, null, "space-between"]}
        gap="12"
        w="100%"
        flexDirection={["column", null, null, null, "row"]}
      >
        <Stack
          spacing="6"
          textAlign={["center", null, null, null, "left"]}
          justify={["center", null, null, null, "flex-start"]}
          w={["100%", null, null, null, "50%"]}
          maxW="440px"
          mx={["auto", null, null, null, "0"]}
        >
          <Text>
            I bring strong problem-solving skills and a deep understanding of building scalable, user-focused products.
          </Text>
          <Text>
            As a naturally curious person and a fast learner, I am highly adaptable and eager to solve new problems.
          </Text>
          <Text>I thrive in small to mid-sized, collaborative teams that care about shipping great products.</Text>
        </Stack>
        <SkillsBlock />
      </VStack>
    </Stack>
  );
}

export default AboutSection;
