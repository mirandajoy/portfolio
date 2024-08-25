import { useEffect } from "react";
import { brand, hero, aboutAssets, howAssets } from "../../constants/learningClubInfo.js";
import "./LearningClubPage.scss";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout.jsx";

function LearningClubPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectLayout brand={brand} hero={hero} aboutAssets={aboutAssets} howAssets={howAssets} />
    </>
  );
}

export default LearningClubPage;
