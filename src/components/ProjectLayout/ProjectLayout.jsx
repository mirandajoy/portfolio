import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

import Carousel from "../../components/Carousel/Carousel";
import Header from "../../components/Header/Header";

import "./ProjectLayout.scss";

function ProjectLayout({ brand, hero, aboutAssets, howAssets }) {
  const headerBgColor = useColorModeValue(brand.brandLight, "gray.900");
  const headerColor = useColorModeValue("gray.700", "gray.50");
  const headingColor = useColorModeValue(brand.brandColor, brand.brandColor);
  const logoColor = useColorModeValue("black", "gray.50");

  return (
    <>
      <Header bgColor={headerBgColor} color={headerColor} logoColor={logoColor} />
      <Flex
        direction="column"
        align="center"
        justify="center"
        paddingTop={[null, null, "12", "16"]}
        paddingBottom={["12", "16", "20", "32"]}
        bgColor={headerBgColor}
        gap={["6", null, null, "8"]}
        paddingInline="4"
      >
        <Box textAlign="center">
          <Image src={hero.logo} marginLeft="-2" marginInline="auto" />
          <Heading
            fontFamily="Rock Salt"
            fontSize={["3xl", null, "4xl", "5xl"]}
            paddingTop={["8", null, null, "16"]}
            color={headingColor}
          >
            {hero.title}
          </Heading>
        </Box>
        <Flex paddingTop="2" direction={["column", "row"]} gap="2">
          <Button variant="solid" as="a" href={hero.primaryCtaLink} target="_blank">
            Explore the Live Product
          </Button>
          <Button variant="outline" as="a" href={hero.secondaryCtaLink} target="_blank">
            View the Source Code
          </Button>
        </Flex>
      </Flex>
      <Box as="section" paddingInline="4" maxW={["500", null, "600", "1280"]} m="auto">
        <Heading
          color={headingColor}
          fontFamily="Rock Salt"
          fontSize={["3xl", null, "4xl", "5xl"]}
          maxW={[null, null, null, "1000"]}
          m="auto"
          paddingTop={["16", null, "20", "32", "48"]}
          paddingLeft={["1", null, null, "8"]}
          paddingBottom="8"
        >
          About
        </Heading>
        <Flex direction="column" align="center">
          {aboutAssets.map((item, indexA) => {
            return (
              <Flex
                key={indexA}
                direction={["column", null, null, "row"]}
                align="flex-start"
                marginTop={item.marginTop}
                marginBottom={item.marginBottom}
              >
                {
                  <Box
                    maxW={item.captionWidth}
                    textAlign={item.captionRight ? ["left", null, null, "right"] : "left"}
                    marginTop={item.marginTopCaption}
                    paddingRight={item.captionRight && [null, null, null, "6"]}
                    paddingLeft={!item.captionRight && [null, null, null, "6"]}
                    fontSize="sm"
                    order={item.captionRight ? ["2", null, null, "1"] : "3"}
                  >
                    {item.caption.map((paragraph, indexB) => {
                      return (
                        <Text key={indexB} paddingTop={["1", null, "2", "3"]}>
                          {paragraph}
                        </Text>
                      );
                    })}
                  </Box>
                }
                <Image src={item.img} maxW={item.imgWidth} order={["1", null, null, "2"]} />
              </Flex>
            );
          })}
        </Flex>
      </Box>
      {howAssets && (
        <Box
          as="section"
          paddingInline="4"
          maxW={["100%", "500", "600", "1000"]}
          m="auto"
          paddingBlock={["20", null, "20", "32", "48"]}
        >
          <Heading
            color={headingColor}
            fontFamily="Rock Salt"
            fontSize={["3xl", null, "4xl", "5xl"]}
            m="auto"
            paddingLeft={["1", null, null, "8"]}
            paddingBottom="8"
          >
            How It Was Built
          </Heading>
          <Flex wrap="wrap" align="flex-start" gap="8">
            {howAssets.map((item, i) => {
              return (
                <Box key={i} w={["100%", null, "calc(50% - 1rem)"]}>
                  <Carousel carouselList={howAssets} openCarousel={i}>
                    <Image src={item.img} objectFit="contain" />
                  </Carousel>
                  <Text paddingTop={["2", null, "4"]} fontSize="sm">
                    {item.caption}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      )}
      <Flex
        direction={["column", null, null, null, "row"]}
        align="center"
        justify="center"
        bgColor={headerBgColor}
        gap={["6", null, null, "8"]}
        as="section"
        paddingInline="4"
        paddingBlock={["12", "16", "20", "28"]}
      >
        <Heading color={headingColor} fontFamily="Rock Salt" textAlign="center">
          Explore For Yourself
        </Heading>
        <Flex flexDirection={["column", "row"]} gap="2">
          <Button variant="solid" as="a" href={hero.primaryCtaLink} target="_blank">
            Explore the Live Product
          </Button>
          <Button variant="outline" as="a" href={hero.secondaryCtaLink} target="_blank">
            View the Source Code
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default ProjectLayout;
