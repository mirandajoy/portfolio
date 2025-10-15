import { useEffect, useRef, useState } from "react";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import IntroSection from "../components/home/IntroSection";
import AboutSection from "../components/home/AboutSection";
import WorkSection from "../components/home/WorkSection";
import ContactSection from "../components/home/ContactSecion";

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
  const headerColor = useColorModeValue("gray.50", "gray.50");
  const headerBg = useColorModeValue("brand.500", "brand.600");
  const logoColor = useColorModeValue("gray.50", "gray.50");
  const workBg = useColorModeValue("secondary.50", "gray.700");
  const contactBg = useColorModeValue("secondary.50", "gray.700");
  const maxContentWidth = "62.5rem";

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
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
      <Box mt="20" w="100%">
        <Stack
          maxW={maxContentWidth}
          mx="auto"
          px={["8", "6", "10"]}
          py={["16", "16", "24", "28"]}
          spacing={["20", "16", "24", "28"]}
        >
          <Box ref={(el) => (sectionRef.current["home"] = el)} id="home" as="section">
            <IntroSection />
          </Box>
          <Box ref={(el) => (sectionRef.current["about"] = el)} id="about" as="section">
            <AboutSection />
          </Box>
        </Stack>
        <Box ref={(el) => (sectionRef.current["mywork"] = el)} id="mywork" as="section" bgColor={workBg}>
          <Box maxW={maxContentWidth} px={["4", "6", "10"]} py={["16", "16", "24", "28"]} mx="auto">
            <WorkSection />
          </Box>
        </Box>
        <Box
          ref={(el) => (sectionRef.current["contact"] = el)}
          id="contact"
          as="section"
          bgColor={contactBg}
          borderTop="1px"
          borderColor="gray.200"
        >
          <Box maxW={maxContentWidth} px={["4", "6", "10"]} py={["16", "16", "24", "28"]} mx="auto">
            <ContactSection />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
