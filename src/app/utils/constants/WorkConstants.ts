import ecopetrolPathLogo from "../../../assets/images/Ecopetrol.png";
import minMinasPathLogo from "../../../assets/images/MinMinas.png";
import minTrabajoPathLogo from "../../../assets/images/MinTrabajo.png";
import unadPathLogo from "../../../assets/images/Unad.png";
import uRosarioPathLogo from "../../../assets/images/u-rosario.png";
import sodexoPathLogo from "../../../assets/images/sodexo.png";
import bicodePathLogo from "../../../assets/images/bicode.png";
import wTechPathLogo from "../../../assets/images/w-tech.png";
import { faAngular, faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { WorkCardType } from "../../components/pages/work/expandableCard/workCard/types/WorkCardTypes.ts";
import minMinLoginScreenImage from "../../../assets/images/work/minMin/login_screen.png";
import minMinLoginScreenAd from "../../../assets/images/work/minMin/login_screen_ad.png";
import minMinHomeScreen from "../../../assets/images/work/minMin/home_screen.png";

import wtechAvatarScreen from "../../../assets/images/work/wtech/avatares.png";
import wTechScenariosScreen from "../../../assets/images/work/wtech/scenaries.png";
import wTechScenariosNavScreen from "../../../assets/images/work/wtech/scenaries_nav.png";


import labinnovaLoginScreen from "../../../assets/images/work/labinnova/login_screen.png";
import labinnovaHomeScreen from "../../../assets/images/work/labinnova/home_screen.png";


import sodexoHomeScreen from "../../../assets/images/work/sodexo/login_screen.png";
import sodexoLoginScreen from "../../../assets/images/work/sodexo/home_screen.png";

import bicodeHomePlatformScreen from "../../../assets/images/work/bicode/home_platform.png";
import bicodeHomeAnalyticsScreen from "../../../assets/images/work/bicode/home_analytics.png";
import bicodeLoginScreen from "../../../assets/images/work/bicode/login_screen.png";


export const workInfo: WorkCardType[] = [
  {
    imagePath: uRosarioPathLogo,
    description: "I contributed in the creation of the frontend with Angular and the backend with .NET Core 6. In addition, during the course of the project I had a close contact with the client, this in order to solve technical doubts and support the business team.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
  },
  {
    imagePath: minMinasPathLogo,
    description: "I was in a crucial position in the interoperability team, creating different functions in azure that allowed through different techniques to obtain the necessary information for the construction of the portal. From queries to different government portals to Web Scraping to obtain data.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: minTrabajoPathLogo,
    description: "Building microservices in .NET Core for managing the International Pension Agreements information system, including document generation, user management, among many other relevant processes. Implementing and designing the Frontend application in Angular.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
    workImagesPath: [minMinLoginScreenImage, minMinLoginScreenAd, minMinHomeScreen]
  },
  {
    imagePath: unadPathLogo,
    description: "Implementation of the LabInnova project used for the management and generation of educational digital resources. Creation of an avatar module in React, development of RESTful API in Java and Node.js, creation of user interface design for the different modules, decision-making, and client communication.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
    workImagesPath: [labinnovaLoginScreen, labinnovaHomeScreen]
  },
  {
    imagePath: ecopetrolPathLogo,
    description: "Creation of the WEB portal in Power Pages for the management and communication of mineral collection processes.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: sodexoPathLogo,
    description: "Creation of the WEB portal in Power Pages, implementation of automated workflows in Power Automate, and generation of business rules for the Dataverse. The system built aimed at managing occupational exams.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
    workImagesPath: [sodexoHomeScreen, sodexoLoginScreen]
  },
  {
    imagePath: bicodePathLogo,
    description: "Collaboration in the development of company-owned products, highlighting the creation of a WEB portal in next.js, which provides a complete workspace with the integration of GPT for managing and obtaining metrics corresponding to sales, purchases, etc.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
    workImagesPath: [bicodeHomePlatformScreen, bicodeHomeAnalyticsScreen, bicodeLoginScreen]
  },
  {
    imagePath: wTechPathLogo,
    description: "Creation of an active learning system, where students' pronunciation is assessed, providing metrics and integrations with GPT for feedback on results.",
    technologies: [faAngular, faJs, faCss3, faHtml5],
    workImagesPath: [wtechAvatarScreen, wTechScenariosScreen, wTechScenariosNavScreen]
  }
];
