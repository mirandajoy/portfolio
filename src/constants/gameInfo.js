import gameBoard from "../assets/game-board.png";
import gameSetup from "../assets/game-setup.png";
import logo from "../assets/game-logo.svg";
import gameHook from "../assets/game-hook.png";
import gameAlgo from "../assets/game-algo.png";
import gameSockets from "../assets/game-sockets.png";
import gameReact from "../assets/game-react.png";

export const brand = {
  brandColor: "#328F73",
  brandLight: "#328F731a",
};

export const hero = {
  logo: logo,
  title: "Zen Trails",
  primaryCtaLink: "https://mountains-and-rivers.netlify.app",
  secondaryCtaLink: "https://github.com/mirandajoy/mountains-and-rivers",
};

export const aboutAssets = [
  {
    img: gameBoard,
    imgWidth: ["100%", null, null, "37.5rem"],
    caption: [
      "Mountains and Ladders is a simple single-player web game where the user moves across the board based on the dice roll, after which their new position will be calculated automatically.",
    ],
    captionWidth: ["100%", null, null, "13.75rem"],
    marginTop: ["0", null, null, "8"],
    marginBottom: ["0", null, null, "0"],
    marginTopCaption: ["1", null, null, "0"],
    captionRight: true,
  },
  {
    img: gameSetup,
    imgWidth: ["100%", null, null, "37.5rem"],
    caption: [
      'Once the user or the computer player known as "The Guide" reaches the 100th square the game ends and the winner is declared.',
    ],
    captionWidth: ["100%", null, null, "12.5rem"],
    marginTop: ["8", null, null, "-6"],
    marginBottom: ["0", null, null, "8"],
    marginTopCaption: ["1", null, null, "6"],
    captionRight: false,
  },
];

export const howAssets = [
  {
    img: gameReact,
    caption: "The UI for the game was built with React.js and Saas. All styling and components were custom built.",
  },
  {
    img: gameAlgo,
    caption: "Custom algorithms were created in order to determine the positions of the players on the game board.",
  },
  {
    img: gameHook,
    caption:
      "A custom React hook was built to persist game values in session storage. The board position, players, and winner are all saved to the user's session.",
  },
  {
    img: gameSockets,
    caption:
      "Players can play against a computer, but they can also play against another person in real time using WebSockets.",
  },
];
