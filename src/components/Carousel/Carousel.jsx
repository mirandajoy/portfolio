import { ArrowBackIcon, ArrowForwardIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import "./Carousel.scss";

function Carousel({ carouselList, openCarousel, children }) {
  const [activeItem, setActiveItem] = useState(0);
  const backBtnDisplay = activeItem === 0 ? "hidden" : "visible";
  const nextBtnDisplay = activeItem === carouselList.length - 1 ? "hidden" : "visible";

  const handleCarouselChange = (direction) => {
    if (direction === "backwards") {
      setActiveItem((prevActiveItem) => (prevActiveItem === 0 ? 0 : prevActiveItem - 1));
    } else {
      setActiveItem((prevActiveItem) =>
        prevActiveItem === carouselList.length - 1 ? carouselList.length - 1 : prevActiveItem + 1
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      setActiveItem((prevActiveItem) => (prevActiveItem === 0 ? 0 : prevActiveItem - 1));
    } else if (event.key === "ArrowRight") {
      setActiveItem((prevActiveItem) =>
        prevActiveItem === carouselList.length - 1 ? carouselList.length - 1 : prevActiveItem + 1
      );
    } else if (event.key === "ESC") {
      onClose();
    }
  };

  useEffect(() => {
    setActiveItem(openCarousel);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        onClick={() => {
          setActiveItem(openCarousel);
          onOpen();
        }}
        cursor="pointer"
        position="relative"
      >
        {children}
        <Center
          opacity="0"
          position="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          transition="0.3s ease-in-out"
          _after={{
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            bottom: "0",
            right: "0",
            bgColor: "gray.900",
            opacity: "0.7",
          }}
          _hover={{
            opacity: "1",
          }}
        >
          <Button zIndex="1" variant="solid" leftIcon={<SmallAddIcon />}>
            View
          </Button>
        </Center>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size="full" onKeyDown={handleKeyDown}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding={["1", null, null, "4"]}>
            <Flex
              gap={["2", null, null, "6"]}
              align="center"
              justify="space-around"
              padding={["1", null, null, "4"]}
              minHeight="calc(100vh - 1rem)"
              w="100%"
            >
              <IconButton
                visibility={backBtnDisplay}
                variant="outline"
                aria-label="Back"
                icon={<ArrowBackIcon />}
                onClick={() => handleCarouselChange("backwards")}
              />
              <Box>
                <Image src={carouselList[activeItem].img} alt="" maxHeight={[null, null, "calc(100vh - 3rem)"]} />
              </Box>
              <IconButton
                visibility={nextBtnDisplay}
                variant="outline"
                aria-label="Back"
                icon={<ArrowForwardIcon />}
                onClick={() => handleCarouselChange("forwards")}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Carousel;
