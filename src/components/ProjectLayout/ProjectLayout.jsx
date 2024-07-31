import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import "./ProjectLayout.scss";

function ProjectLayout({ heroImg, title, summary, approach, result }) {
  return (
    <>
      <Header bgColor="blue.500" color="gray.50"/>
      <Box mt="14" mb="10">
        <Box as="section" p="9" maxW="800px" m="auto">
          <Image src={heroImg} alt="" w="100%" pb="9" />
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
        <Box as="section" py="4" px="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="4">
            The Result
          </Heading>
          {result.map((r, i) => {
            return (
              <Box key={i}>
                <Image src={r.image} alt="" w="100%" border="1px" borderColor="gray.200" borderTopRadius="base" />
                <Text fontSize="md" p="4" bg="gray.100" mb="9" borderBottomRadius="base">
                  {r.text}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default ProjectLayout;
