import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import heroMockup from "../../assets/learning-club-mockup.jpg";
import landingPage from "../../assets/learning-club-landing.png";
import dashboard from "../../assets/learning-club-dashboard.png";
import { useEffect } from "react";
import "./LearningClubPage.scss";

function LearningClubPage() {
  const summary = [
    `The Learning Club brings curious people together to learn and connect. Talented creators have produced
          countless engaging resources across a range of mediums for adults to continue recreational learning.`,
    `However, this type of recreational learning is often a solo activity. With the Learning Club this no longer
          needs to be the case. Each month we'll collect fun and easy to consume resources for you to learn about a new
          topic. Then you can find a group and chat with them about what you learned, your favourite new facts, and
          more!`,
  ];

  const approach = [
    `The Learning Club was built as a full-stack application with React, Express, Node.js, and MySQL.`,
    `The backend leverages a relational database to keep track of the groups, group members, and group events. Knex
          is used to manage the data model layer and data is served to the frontend using a custom REST API.`,
    `The frontend is built with a custom component set using the saas framework to organize the styling.`,
  ];

  const result = [
    {
      highlight: `Landing Page`,
      text: `Users can discover the Learning Club landing page and explore what groups exists near them. To launch or join
          a group they can sign up.`,
      image: landingPage,
    },
    {
      highlight: `Dashboard`,
      text: `On sign up users will see the theme of the month, links to the learning resources and options to join groups
          and rsvp to events.`,
      image: dashboard,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectLayout
        title="The Learning Club"
        summary={summary}
        approach={approach}
        result={result}
        heroImg={heroMockup}
      />
    </>
  );
}

export default LearningClubPage;
