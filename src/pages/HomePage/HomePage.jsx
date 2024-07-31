import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import scoreMockup from "../../assets/score-mockup.jpg";
import learningClubMockup from "../../assets/learning-club-sq.jpg";
import Header from "../../components/Header/Header";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Header bgColor="blue.500" color="gray.50" />
      <Box mt="14" mb="10">
        <Flex as="section" p="9" align="center" justify="center" gap="9" maxW="800px" mx="auto">
          <AspectRatio w="50%" ratio={1}>
            <Image src={profile} alt="My Photo" maxW="300px" borderRadius="md" />
          </AspectRatio>
          <Box>
            <Heading as="h2" size="xl" pb="4">
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

        <Box id="about" as="section" p="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="4">
            About Me
          </Heading>
          <Flex align="flex-start" justify="space-between" gap="9">
            <Box flexBasis="60%">
              <Text fontSize="md" marginY="3">
                I've been working in the tech industry for the past 7 years. I got my start as a UX Designer and have
                worked for the past 5+ years as a Product Manager.
              </Text>
              <Text fontSize="md" marginY="3">
                Over the years, I have built out various technical skills from building React Components to support UI
                implmentation, to researching APIs to uncover solution opportunities, and becoming proficient with SQL
                to drive problem-discovery and track impact.
              </Text>
              <Text fontSize="md" marginY="3">
                Completing Brainstation's intensive full-stack engineering bootcamp allowed me to bridge my various
                skills together and deepen my capabilities. I am excited to leverage my well-rounded skillset to
                contribute to a team as a Software Engineer.
              </Text>
            </Box>
            <Flex gap="3" basis="40%" wrap="wrap" justify="flex-end" marginY="3">
              <Tag bgColor="brand.700">HTML</Tag>
              <Tag bgColor="brand.700">CSS</Tag>
              <Tag bgColor="brand.700">Sass</Tag>
              <Tag bgColor="brand.700">JavaScript</Tag>
              <Tag bgColor="brand.700">React</Tag>
              <Tag bgColor="brand.700">React Router</Tag>
              <Tag bgColor="brand.700">Node.js</Tag>
              <Tag bgColor="brand.700">Express</Tag>
              <Tag bgColor="brand.700">MySQL</Tag>
            </Flex>
          </Flex>
        </Box>

        <Box id="mywork" as="section" p="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="9">
            Projects
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <LinkBox>
                <LinkOverlay as={Link} to="/learning-club">
                  <AspectRatio ratio={1}>
                    <Image src={learningClubMockup} alt="Learning Club" objectFit="cover" />
                  </AspectRatio>
                </LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox>
                <LinkOverlay as={Link} to="/the-score">
                  <AspectRatio ratio={1}>
                    <Image src={scoreMockup} alt="The Score Project" objectFit="cover" />
                  </AspectRatio>
                </LinkOverlay>
              </LinkBox>
            </GridItem>
          </Grid>
        </Box>

        <Box id="contact" as="section" p="9" maxW="800px" m="auto">
          <Heading as="h2" size="xl" pb="4">
            Contact
          </Heading>
          <Text fontSize="md" marginY="3">
            You can reach me at:{" "}
            <ChakraLink href="mailto:miranda.neerhof@gmail.com" isExternal color="blue.600" fontWeight="semibold">
              miranda.neerhof@gmail.com
            </ChakraLink>
          </Text>
          <Text fontSize="md" marginY="3">
            Connect with me on:
            <ChakraLink
              href="https://www.linkedin.com/in/mirandaneerhof/"
              isExternal
              px="2"
              color="blue.600"
              fontWeight="semibold"
            >
              LinkedIn
            </ChakraLink>
            |
            <ChakraLink href="https://github.com/mirandajoy/" isExternal px="2" color="blue.600" fontWeight="semibold">
              GitHub
            </ChakraLink>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
