import { useEffect } from "react";
import { brand, hero, aboutAssets, howAssets } from "../../constants/gameInfo.js";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";

import "./GamePage.scss";

function GamePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectLayout brand={brand} hero={hero} aboutAssets={aboutAssets} howAssets={howAssets} />
    </>
  );
}

export default GamePage;
