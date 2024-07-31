import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import homePage from "../../assets/score-home.png";
import articlePage from "../../assets/score-article.png";
import heroMockup from "../../assets/score-mockup.jpg";
import { useEffect } from "react";
import "./TheScorePage.scss";

function TheScorePage() {
  const summary = [
    `BrainStation put on a 24 hour Hackathon in collaboration with The Score. They asked us to come up with a concept to address the question: "How might The Score engage fans in the off-season?"`,
    `In collaboration with a group of 6 we came up with the idea to focus on the players, providing juicy updates about their lives, trade rumours, and even more gossip`,
  ];

  const approach = [
    `We built out our concept using React, Express, and Node.js`,
    `As this was a concept project we leveraged simplified components and pulled sample data from a JSON file.`,
  ];

  const result = [
    {
      text: `The player news section integrates with the existing layout on The Score.`,
      image: homePage,
    },
    {
      text: `Users can click into view articles in more depth and dive into a discussion section with their opinions on the situation.`,
      image: articlePage,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectLayout
        title="The Score Insider"
        summary={summary}
        approach={approach}
        result={result}
        heroImg={heroMockup}
      />
    </>
  );
}

export default TheScorePage;
