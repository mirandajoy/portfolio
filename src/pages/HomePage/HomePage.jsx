import { DownloadIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Link as ChakraLink,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import resume from "../../../public/miranda_neerhof_resume.pdf";
import gameMockup from "../../assets/game-mockup-sq.jpg";
import learningClubMockup from "../../assets/learning-club-sq.jpg";
import profile from "../../assets/profile-transparent.png";
import Header from "../../components/Header/Header";

import "./HomePage.scss";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "mywork", label: "My Work" },
  { id: "contact", label: "Contact" },
];

function HomePage() {
  const [visibleSection, setVisibleSection] = useState("");
  const sectionRef = useRef({});
  const visibilityRatios = useRef({});
  const projectCardOutline = useColorModeValue("gray.200", "gray.800");
  const headerColor = useColorModeValue("gray.50", "gray.50");
  const headerBg = useColorModeValue("brand.600", "brand.600");
  const logoColor = useColorModeValue("gray.50", "gray.50");
  const imageOutline = useColorModeValue("1px solid", "none");
  const imageBg = useColorModeValue("#7086c31a", "#7086c333");

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityRatios.current[entry.target.id] = entry.intersectionRatio;
        });

        const mostVisibleSection = Object.keys(visibilityRatios.current).reduce((mostVisible, sectionId) => {
          if (visibilityRatios.current[sectionId] > (visibilityRatios.current[mostVisible] || 0)) {
            return sectionId;
          }
          return mostVisible;
        }, "");

        setVisibleSection(mostVisibleSection);
      },
      {
        threshold: [0.75, 1],
      }
    );

    sections.forEach((section) => {
      if (sectionRef.current[section.id]) {
        observer.observe(sectionRef.current[section.id]);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionRef.current[section.id]) {
          observer.unobserve(sectionRef.current[section.id]);
        }
      });
    };
  }, []);

  return (
    <>
      <Box pos="fixed" top="0" w="100%" zIndex="100" t="0">
        <Header bgColor={headerBg} color={headerColor} visibleSection={visibleSection} logoColor={logoColor} />
      </Box>
      <Box mb={["4", "6", "10"]} mt={["80px", "100px", "168px"]}>
        <Flex
          ref={(el) => (sectionRef.current["home"] = el)}
          id="home"
          as="section"
          p={["4", "6", "9"]}
          align="center"
          justify="center"
          gap="9"
          maxW="800px"
          mx="auto"
          flexWrap={["wrap", "wrap", "nowrap"]}
        >
          <AspectRatio w={["100%", "75%", "50%"]} ratio={[12 / 7, 12 / 7, 1]}>
            <Image
              src={profile}
              alt="My Photo"
              maxW={["100%", "100%", "300px"]}
              borderRadius="10px"
              objectFit="cover"
              bgColor={imageBg}
              border={imageOutline}
              borderColor="gray.100"
            />
          </AspectRatio>
          <Box w={["100%", "75%"]}>
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

        <Box
          ref={(el) => (sectionRef.current["about"] = el)}
          id="about"
          as="section"
          p={["4", "6", "9"]}
          maxW="800px"
          m="auto"
        >
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
                I've been working in the tech industry for the past 7 years. I got my start as a UX Designer and have
                worked for the past 5+ years as a Product Manager.
              </Text>
              <Text fontSize="md" marginY="3">
                Over the years, I have built out various technical skills from building React Components to support UI
                implementation, to researching APIs to uncover solution opportunities, and becoming proficient with SQL
                to drive problem-discovery and track impact.
              </Text>
              <Text fontSize="md" marginY="3">
                Completing Brainstation's intensive full-stack engineering bootcamp allowed me to bridge my various
                skills together and deepen my capabilities. I am excited to leverage my well-rounded skillset to
                contribute to a team as a Software Engineer.
              </Text>
            </Box>
            <Flex
              gap="3"
              flexBasis={["100%", "75%", "40%"]}
              wrap="wrap"
              justify={["flex-start", "flex-start", "flex-end"]}
              marginY={["0", "0", "3"]}
            >
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>Sass</Tag>
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
              <Tag>React Router</Tag>
              <Tag>Typescript</Tag>
              <Tag>Node.js</Tag>
              <Tag>Express</Tag>
              <Tag>MySQL</Tag>
            </Flex>
          </Flex>
        </Box>

        <Box
          ref={(el) => (sectionRef.current["mywork"] = el)}
          id="mywork"
          as="section"
          p={["4", "6", "9"]}
          maxW="800px"
          m="auto"
        >
          <Heading as="h2" size="xl" pb={["4", "6", "9"]}>
            Projects
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <Card maxW="sm" border="1px" borderColor={projectCardOutline}>
                <LinkBox>
                  <LinkOverlay as={Link} to="/learning-club">
                    <CardBody pb="0">
                      <AspectRatio ratio={3 / 2}>
                        <Image src={learningClubMockup} alt="Learning Club Homepage Mockup" borderRadius="base" />
                      </AspectRatio>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" fontSize="24">
                          The Learning Club
                        </Heading>
                        <Text>
                          A platform to bring curious people together to learn and connect. Designed to allow people to
                          create meet up groups and organize discussion-based events.
                        </Text>
                      </Stack>
                    </CardBody>
                  </LinkOverlay>
                </LinkBox>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue" as={Link} to="/learning-club">
                      Learn More
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      as="a"
                      href="https://github.com/mirandajoy/miranda-neerhof-the-learning-club"
                      target="_blank"
                    >
                      View GitHub
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem>
              <Card maxW="sm" border="1px" borderColor={projectCardOutline}>
                <LinkBox>
                  <LinkOverlay as={Link} to="/mountains-and-rivers">
                    <CardBody pb="0">
                      <AspectRatio ratio={3 / 2}>
                        <Image src={gameMockup} alt="Mountain and Rivers Game Mockup" borderRadius="base" />
                      </AspectRatio>
                      <Stack mt="6" spacing="3">
                        <Heading size="md" fontSize="24">
                          Zen Trails
                        </Heading>
                        <Text>
                          A single-player web game where the user moves across the board based on the dice roll. Moving
                          up mountains and down rivers keeps the game interesting.
                        </Text>
                      </Stack>
                    </CardBody>
                  </LinkOverlay>
                </LinkBox>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue" as={Link} to="/mountains-and-rivers">
                      Learn More
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      as="a"
                      href="https://github.com/mirandajoy/mountains-and-rivers"
                      target="_blank"
                    >
                      View GitHub
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          </Grid>
        </Box>

        <Box
          ref={(el) => (sectionRef.current["contact"] = el)}
          id="contact"
          as="section"
          p={["4", "6", "9"]}
          maxW="800px"
          m="auto"
        >
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
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
