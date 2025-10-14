import { AspectRatio, Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

import profile from "../../assets/profile-transparent.png";

function IntroSection() {
  const imageOutline = useColorModeValue("1px solid", "none");
  const imageBg = useColorModeValue("#7086c31a", "#ffffffc9");

  return (
    <Flex align="center" justify="center" gap="9" flexWrap={["wrap", "wrap", "nowrap"]}>
      <AspectRatio w={["45%", "45%", "45%"]} ratio={1}>
        <Image
          src={profile}
          alt="My Photo"
          maxW={["300px", "300px", "300px"]}
          borderRadius="200px"
          objectFit="cover"
          bgColor={imageBg}
          border={imageOutline}
          borderColor="gray.100"
        />
      </AspectRatio>
      <Box w={["100%", "75%", "100%"]}>
        <Heading as="h2" size="xl" pb={["1", "2", "4"]}>
          Hi there!
        </Heading>
        <Text fontSize="md" marginY="3">
          I'm Miranda, a Software Engineer and former Senior Product Manager.
        </Text>
        <Text fontSize="md" marginY="3">
          I am driven by solving real-world user problems with collaborative teams.
        </Text>
      </Box>
    </Flex>
  );
}

export default IntroSection;
