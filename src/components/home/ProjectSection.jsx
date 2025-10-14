import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import gameMockup from "../../assets/game-mockup-sq.jpg";
import learningClubMockup from "../../assets/learning-club-sq.jpg";

function ProjectSection() {
  const projectCardOutline = useColorModeValue("gray.200", "gray.800");

  return (
    <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4}>
      <GridItem>
        <Card maxW="m" border="1px" borderColor={projectCardOutline}>
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
                    A platform to bring curious people together to learn and connect. Designed to allow people to create
                    meet up groups and organize discussion-based events.
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
        <Card maxW="m" border="1px" borderColor={projectCardOutline}>
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
                    A single-player web game where the user moves across the board based on the dice roll. Moving up
                    mountains and down rivers keeps the game interesting.
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
  );
}

export default ProjectSection;
