import { AspectRatio, Box, Card, CardBody, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import "./ProjectLayout.scss";

function ProjectLayout({ heroImg, title, summary, approach, result }) {
  const resultBgColor = useColorModeValue("gray.50", "gray.900");
  const summaryBgColor = useColorModeValue("gray.100", "gray.600");
  const projectCardOutline = useColorModeValue("gray.200", "gray.800");

  return (
    <>
      <Header bgColor="blue.500" color="gray.50" />
      <Box mt="10">
        <Box as="section" p="9" maxW="800px" m="auto">
          <AspectRatio ratio={16 / 9}>
            <Image src={heroImg} alt="" w="100%" pb="16" objectFit="cover" objectPosition="left" />
          </AspectRatio>
          <Heading as="h1" size="2xl" pb="4">
            {title}
          </Heading>
        </Box>
        <Box as="section" py="4" px="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="4">
            Summary
          </Heading>
          {summary.map((p, i) => {
            return (
              <Text key={i} fontSize="md" marginY="3">
                {p}
              </Text>
            );
          })}
        </Box>
        <Box as="section" py="4" px="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="4">
            Approach
          </Heading>
          {approach.map((p, i) => {
            return (
              <Text key={i} fontSize="md" marginY="3">
                {p}
              </Text>
            );
          })}
        </Box>
        <Box bgColor={resultBgColor} mt="10">
          <Box as="section" pt="4" pb="12" px="9" maxW="800px" m="auto">
            <Heading as="h2" size="xl" pt="12" pb="4">
              The Result
            </Heading>
            <Stack mt="3" spacing="6">
              {result.map((r, i) => {
                return (
                  <Card key={i} border="1px" borderColor={projectCardOutline}>
                    <CardBody>
                      <Image src={r.image} alt="" borderRadius="base" border="1px" borderColor={projectCardOutline} />
                      <Stack mt="6" spacing="3">
                        <Text>
                          <Text as="span" fontWeight="bold">
                            {r.highlight}:{" "}
                          </Text>
                          {r.text}
                        </Text>
                      </Stack>
                    </CardBody>
                  </Card>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProjectLayout;
