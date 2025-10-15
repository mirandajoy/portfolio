import pantrySlothImageMobile from "../assets/mockups/pantry-sloth-mobile.png";
import lushImageMobile from "../assets/mockups/lush-mobile.png";
import crowdriffCreatorsImageMobile from "../assets/mockups/crowdriff-creators-mobile.png";
import plugInSpeedImageMobile from "../assets/mockups/plug-in-speed-mobile.png";
import pantrySlothImageDesktop from "../assets/mockups/pantry-sloth-desktop.png";
import lushImageDesktop from "../assets/mockups/lush-desktop.png";
import crowdriffCreatorsImageDesktop from "../assets/mockups/crowdriff-creators-desktop.png";
import plugInSpeedImageDesktop from "../assets/mockups/plug-in-speed-desktop.png";

export const workDetails = [
  {
    imageMobile: pantrySlothImageMobile,
    imageDesktop: pantrySlothImageDesktop,
    imageBgColor: "#F28C28",
    header: "Pantry Sloth",
    role: "Software Engineer",
    info: "Pantry Sloth helps users streamline their grocery shopping experience.",
    body: [
      "As I founding engineer at Pantry Sloth I've had the opportunity to shape the architecture of the application.",
      "The beta-version is being built with React, Typescript, Django, and Postgres. I've leveraged a Headless UI library and Tailwind to craft a customize UI library with a mobile-first design approach.",
      "This project has challenged me to make a lot of early-stage decisions, as well as investigate and learn new technologies. It has been key to find the balance between considering how this application may grow while avoiding over-engineering upfront to ensure momentum and remain adaptable.",
    ],
  },
  {
    imageMobile: lushImageMobile,
    imageDesktop: lushImageDesktop,
    imageBgColor: "#FFD23F",
    header: "Lush",
    role: "Software Engineer",
    info: "Lush is a global bath and body product retail chain.",
    body: [
      "I was contracted to build an internal hub for Lush to scale key communications and feedback between retail outlets and their manufacturing teams. I worked closely with key stakeholders to understand their needs, current workflows, and key priorities. I owned the end-to-end solution conception and execution from the UI/UX to database design.",
      "The finished product was a full-stack web app leveraging React, TypeScript, GraphQL, Node.js, Postgres with a comprehensive roles and permission system that integrated into the company's existing auth provider.",
      "This project presented some very interesting problems to solve and challenged me to think about the appropriate database structure, component abstractions and performance trade-offs to support the complex data collection and display needed.",
    ],
  },
  {
    imageMobile: crowdriffCreatorsImageMobile,
    imageDesktop: crowdriffCreatorsImageDesktop,
    imageBgColor: "#0081CC",
    header: "CrowdRiff",
    role: "Senior Product Manager",
    info: "CrowdRiff provides SASS solutions to travel and tourism marketers.",
    body: [
      "My work there included driving initiatives to improve retention, revamping legacy features for new use cases, and leading greenfield projects to generate new revenue streams.",
      "The project that I am most proud of is leading the development and launch of CrowdRiff Creators, a marketplace where marketers could commission short-form video content from UGC creators.",
      "This project pushed me in many ways, from expanding my capacity to drive and manage a new arm of business growth to deepening my involvement with the technical execution of the solution. In the end, I enjoyed the technical problem-solving and drove me to want to develop that skillset further.",
    ],
  },
  {
    imageMobile: plugInSpeedImageMobile,
    imageDesktop: plugInSpeedImageDesktop,
    imageBgColor: "#332970",
    header: "Plug in Useful",
    role: "Product Designer, Frontend Developer, Product Manager",
    info: "Plug in Useful offers a suite of e-commerce Shopify apps that  stores can plug into their sites.",
    body: [
      "As a lean company I wore several hats in my time there. I initially worked as a designer and frontend developer.",
      "I implemented all my designs directly, creating reusable React components, coding layouts, and maintaining a SCSS design system. This experience was my introduction to collaborative development, leveraging git, and translating my designs into modular and scalable patterns.",
      "As the product suite grew I took on a role as a Product Manager working directly with the CEO to discover opportunities, prioritize work, and track success. This experience built my muscle for making tough trade-offs and getting comfortable doing the right thing over the perfect thing.",
    ],
  },
];
