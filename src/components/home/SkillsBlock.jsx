import { Flex, Tag } from "@chakra-ui/react";

function SkillsBlock() {
  return (
    <Flex
      gap="3"
      flexBasis={["100%", null, null, null, "40%"]}
      wrap="wrap"
      justify={["center", null, null, null, "flex-end"]}
      marginY={["0", "0", "0", "1"]}
      maxW="37.5rem"
      mx={["auto", null, null, null, "0"]}
    >
      <Tag>HTML</Tag>
      <Tag>CSS</Tag>
      <Tag>Tailwind</Tag>
      <Tag>SCSS</Tag>
      <Tag>JavaScript</Tag>
      <Tag>Typescript</Tag>
      <Tag>React</Tag>
      <Tag>Redux</Tag>
      <Tag>RTK Query</Tag>
      <Tag>Node.js</Tag>
      <Tag>Express</Tag>
      <Tag>Python</Tag>
      <Tag>Django</Tag>
      <Tag>Django Rest Framework</Tag>
      <Tag>Rest APIs</Tag>
      <Tag>GraphQL</Tag>
      <Tag>Prisma</Tag>
      <Tag>Postgres</Tag>
      <Tag>MySQL</Tag>
    </Flex>
  );
}

export default SkillsBlock;
