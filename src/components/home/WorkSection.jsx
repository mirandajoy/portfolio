import { workDetails } from "../../constants/work";
import { Stack, Heading } from "@chakra-ui/react";
import WorkBlock from "./WorkBlock";

function WorkSection() {
  return (
    <Stack spacing="8">
      <Heading as="h2" size="xl">
        My Work
      </Heading>
      <Stack spacing={["4", "6", "10"]}>
        {workDetails.map((detail, index) => (
          <WorkBlock key={index} detail={detail} />
        ))}
      </Stack>
    </Stack>
  );
}

export default WorkSection;
