import dashboard from "../assets/lc-dashboard.png";
import jwt from "../assets/lc-jwt.png";
import landingPage from "../assets/lc-landing.png";
import newGroup from "../assets/lc-new-group.png";
import react from "../assets/lc-react.png";
import routes from "../assets/lc-routes.png";
import schema from "../assets/lc-schema.png";
import logo from "../assets/logo-deconstructed.svg";

export const brand = {
  brandColor: "#3f4eb5",
  brandLight: "#3f4eb51a",
};

export const hero = {
  logo: logo,
  title: "The Learning Club",
  primaryCtaLink: "https://ourlearning.club/",
  secondaryCtaLink: "https://github.com/mirandajoy/miranda-neerhof-the-learning-club",
};

export const aboutAssets = [
  {
    img: landingPage,
    imgWidth: ["100%", null, null, "37.5rem"],
    caption: [
      "The Learning Club was created to bring people together over a common curiosity and love of learning.",
      "It operates like a book club but for podcasts!",
    ],
    captionWidth: ["100%", null, null, "13.75rem"],
    marginTop: ["0", null, null, "8"],
    marginBottom: ["0", null, null, "0"],
    marginTopCaption: ["1", null, null, "0"],
    captionRight: true,
  },
  {
    img: newGroup,
    imgWidth: ["100%", null, null, "37.5rem"],
    caption: [
      "This platform allows people to create groups either locally or remote.",
      "Then others can discover and join them.",
    ],
    captionWidth: ["100%", null, null, "12.5rem"],
    marginTop: ["8", null, null, "-6"],
    marginBottom: ["0", null, null, "8"],
    marginTopCaption: ["1", null, null, "6"],
    captionRight: false,
  },
  {
    img: dashboard,
    imgWidth: ["100%", null, null, "50rem"],
    caption: [
      "A new podcast is featured each month.",
      "Organizers can host discussion events to share favourite facts, ideas that were sparked, and additional knowledge.",
    ],
    captionWidth: ["100%", null, null, "20rem"],
    marginTop: ["8", null, null, "8"],
    marginBottom: ["0", null, null, "8"],
    marginTopCaption: ["1", null, null, "0"],
    captionRight: true,
  },
];

export const howAssets = [
  {
    img: react,
    caption:
      "The frontend is built using the React.js framework and Sass. All styling and components have been custom designed and built.",
  },
  {
    img: jwt,
    caption:
      "Auth is powered by JWT tokens generated on sign up or log in. Tokens stay valid throughout the user session or up to 24 hours.",
  },
  {
    img: schema,
    caption:
      "This platform uses MySQL for the database. The design accounts for the various relationships between users, groups, and events.",
  },
  {
    img: routes,
    caption:
      "Node.js and Express power the server and provide REST API endpoints for the client to get and modify dates.",
  },
];
