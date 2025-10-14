import { useEffect, useRef, useState } from "react";
import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header";
import ContactSection from "../components/home/ContactSecion";
import ProjectSection from "../components/home/ProjectSection";
import AboutSection from "../components/home/AboutSection";
import IntroSection from "../components/home/IntroSection";

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
  const headerBg = useColorModeValue("brand.500", "brand.500");
  const logoColor = useColorModeValue("gray.50", "gray.50");

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
      <Box mb={["4", "6", "10"]} mt={["80px", "100px", "168px"]} w="100%">
        <Stack maxW="900px" mx="auto" p={["4", "6", "9"]} spacing={["8", "12", "20"]} w={["100%", "75%", "100%"]}>
          <Box ref={(el) => (sectionRef.current["home"] = el)} id="home" as="section">
            <IntroSection />
          </Box>
          <Box ref={(el) => (sectionRef.current["about"] = el)} id="about" as="section">
            <AboutSection />
          </Box>
          <Box ref={(el) => (sectionRef.current["mywork"] = el)} id="mywork" as="section">
            <ProjectSection />
          </Box>
          <Box ref={(el) => (sectionRef.current["contact"] = el)} id="contact" as="section">
            <ContactSection />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default HomePage;
