import { Flex, Tag } from "@chakra-ui/react";

function SkillsBlock() {
  return (
    <Flex
      gap="3"
      flexBasis={["100%", "75%", "40%"]}
      wrap="wrap"
      justify={["flex-start", "flex-start", "flex-end"]}
      marginY={["0", "0", "3"]}
    >
      <Tag>HTML</Tag>
      <Tag>CSS</Tag>
      <Tag>Tailwind</Tag>
      <Tag>Sass</Tag>
      <Tag>JavaScript</Tag>
      <Tag>Python</Tag>
      <Tag>React</Tag>
      <Tag>Redux</Tag>
      <Tag>React Router</Tag>
      <Tag>Typescript</Tag>
      <Tag>Node.js</Tag>
      <Tag>Express</Tag>
      <Tag>Django</Tag>
      <Tag>Postgres</Tag>
      <Tag>MySQL</Tag>
    </Flex>
  );
}

export default SkillsBlock;
