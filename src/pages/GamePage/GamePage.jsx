import { useEffect } from "react";

import gameBoard from "../../assets/game-board.png";
import gameMockup from "../../assets/game-mockup.jpg";
import gameSetup from "../../assets/game-setup.png";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";

import "./GamePage.scss";

function GamePage() {
  const summary = [
    `Mountains and Ladders is a simple single-player web game where the user moves across the board based on the dice roll. When landing at the base of a mountain the users move automatically to the top. When landing at the top of a river the user flows down.`,
  ];

  const approach = [
    `I built this game using Javascript, React, and Typescript. Session stroage allows game data to persist throughout the duration of the game. A custom React hook ensures that up to date game data is consistently available to the application.`,
  ];

  const result = [
    {
      highlight: `Setup and Instructions`,
      text: `A user can start playing simply by entering their player name, no log in is required.`,
      image: gameSetup,
    },
    {
      highlight: `Board and Game Actions`,
      text: `A user can roll to move across the board and their new position will be calculated automatically. Once the user or the computer player known as "The Guide" reaches the 100th square the game ends and the winner is declared.`,
      image: gameBoard,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectLayout
        title="Mountains and Rivers"
        summary={summary}
        approach={approach}
        result={result}
        heroImg={gameMockup}
      />
    </>
  );
}

export default GamePage;
