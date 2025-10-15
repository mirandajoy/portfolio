import { Box, Heading, Image, Stack, Text, HStack, useColorModeValue, VStack } from "@chakra-ui/react";
import { Building2, User } from "lucide-react";

function WorkBlock({ detail }) {
  const { imageMobile, imageDesktop, imageBgColor, header, role, info, body } = detail;
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <HStack
      w="100%"
      bg={bgColor}
      borderRadius="xl"
      alignItems="stretch"
      p="3"
      flexDirection={["column", "column", "column", "row", "row"]}
      border="1px"
      borderColor="gray.100"
    >
      <HStack flexShrink="0" bg={imageBgColor} borderLeftRadius="lg" display={["none", "none", "none", "flex"]}>
        <Image src={imageDesktop} alt="" borderRadius="lg" objectFit="cover" w="25rem" h="auto" />
      </HStack>
      <VStack flexShrink="0" bg={imageBgColor} borderTopRadius="lg" display={["flex", "flex", "flex", "none"]}>
        <Image src={imageMobile} alt="" borderTopRadius="lg" objectFit="cover" w="auto" h="12.5rem" />
      </VStack>
      <Stack spacing="6" p={["4", "6", "10"]}>
        <Stack spacing="6">
          <Heading fontSize="24">{header}</Heading>
          <Stack spacing="2">
            <HStack alignItems="start">
              <Box flexShrink="0">
                <User />
              </Box>
              <Text fontSize="lg" fontWeight="semibold">
                {role}
              </Text>
            </HStack>
            <HStack alignItems="start">
              <Box flexShrink="0">
                <Building2 />
              </Box>
              <Text fontSize="md">{info}</Text>
            </HStack>
          </Stack>
        </Stack>
        <Stack spacing="6">
          {body.map((paragraph, index) => (
            <Text key={index} fontSize="md">
              {paragraph}
            </Text>
          ))}
        </Stack>
      </Stack>
    </HStack>
  );
}

export default WorkBlock;
