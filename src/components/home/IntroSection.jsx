import { AspectRatio, Stack, VStack, Heading, Image, Text, useColorModeValue, Center } from "@chakra-ui/react";

import profile from "../../assets/profile-transparent.png";

function IntroSection() {
  const imageOutline = useColorModeValue("1px solid", "none");
  const imageBg = useColorModeValue("secondary.100", "secondary.200");

  return (
    <VStack gap={["12", "12", "12", "16"]} flexDirection={["column", null, null, null, "row"]} justifyContent="center">
      <AspectRatio w={["15rem", null, null, "18.75rem"]} ratio={1}>
        <Image
          src={profile}
          alt="My Photo"
          borderRadius="full"
          objectFit="cover"
          bgColor={imageBg}
          border={imageOutline}
          borderColor="secondary.200"
        />
      </AspectRatio>
      <Stack spacing="6" align={["center", null, null, null, "flex-start"]} maxW={["18.75rem", "100%"]}>
        <Heading as="h2" size="xl">
          Hi there!
        </Heading>
        <Stack spacing="3" textAlign={["center", null, null, null, "left"]} maxW={["18.75rem", null, "100%"]}>
          <Text fontSize="md">I'm Miranda, a Software Engineer and former Senior Product Manager.</Text>
          <Text fontSize="md">I am driven by solving real-world user problems with collaborative teams.</Text>
        </Stack>
      </Stack>
    </VStack>
  );
}

export default IntroSection;
