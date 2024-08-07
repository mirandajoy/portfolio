import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon }  from "@chakra-ui/icons"
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import scoreMockup from "../../assets/score-mockup.jpg";
import learningClubMockup from "../../assets/learning-club-sq.jpg";
import resume from "../../../public/miranda_neerhof_resume.pdf"
import Header from "../../components/Header/Header";
import { useEffect, useRef, useState } from "react";
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
        <Header bgColor="blue.500" color="gray.50" visibleSection={visibleSection} />
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
            <Image src={profile} alt="My Photo" maxW={["100%", "100%", "300px"]} borderRadius="md" objectFit="cover" />
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
                implmentation, to researching APIs to uncover solution opportunities, and becoming proficient with SQL
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
              <Tag color="gray.800" bgColor="brand.700">
                HTML
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                CSS
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                Sass
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                JavaScript
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                React
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                React Router
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                Node.js
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                Express
              </Tag>
              <Tag color="gray.800" bgColor="brand.700">
                MySQL
              </Tag>
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
              <LinkBox>
                <LinkOverlay as={Link} to="/learning-club">
                  <AspectRatio ratio={1}>
                    <Image src={learningClubMockup} alt="Learning Club" objectFit="cover" borderRadius="base" />
                  </AspectRatio>
                </LinkOverlay>
              </LinkBox>
            </GridItem>
            <GridItem>
              <LinkBox>
                <LinkOverlay as={Link} to="/the-score">
                  <AspectRatio ratio={1}>
                    <Image src={scoreMockup} alt="The Score Project" objectFit="cover" borderRadius="base" />
                  </AspectRatio>
                </LinkOverlay>
              </LinkBox>
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
                <ChakraLink
                  href="https://github.com/mirandajoy/"
                  isExternal
                  px="2"
                  color="blue.600"
                  fontWeight="semibold"
                >
                  GitHub
                </ChakraLink>
              </Text>
            </Box>
            <Box>
              <Button as="a" colorScheme="gray" variant="outline" leftIcon={<DownloadIcon />} href={resume} download="miranda_neerhof_resume.pdf">
                Download My Resume
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
