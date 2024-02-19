import ecopetrolPathLogo from "../../../assets/images/Ecopetrol.png";
import minMinasPathLogo from "../../../assets/images/MinMinas.png";
import minTrabajoPathLogo from "../../../assets/images/MinTrabajo.png";
import unadPathLogo from "../../../assets/images/Unad.png";
import uRosarioPathLogo from "../../../assets/images/u-rosario.png";
import sodexoPathLogo from "../../../assets/images/sodexo.png";
import bicodePathLogo from "../../../assets/images/bicode.png";
import wTechPathLogo from "../../../assets/images/w-tech.png";
import {
  // faReact,
  faHtml5,
  faCss3,
  // faJava,
  faJs,
  faAngular
  // faNodeJs,
  // faMicrosoft
} from "@fortawesome/free-brands-svg-icons";
import { WorkCardType } from "../../components/pages/work/expandableCard/workCard/types/WorkCardTypes.ts";

export const workInfo: WorkCardType[] = [
  {
    imagePath: uRosarioPathLogo,
    description: "I contributed in the creation of the frontend with Angular and the backend with .NET Core 6. In addition, during the course of the project I had a close contact with the client, this in order to solve technical doubts and support the business team.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: minMinasPathLogo,
    description: "I was in a crucial position in the interoperability team, creating different functions in azure that allowed through different techniques to obtain the necessary information for the construction of the portal. From queries to different government portals to Web Scraping to obtain data.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: minTrabajoPathLogo,
    description: "Building microservices in .NET Core for managing the International Pension Agreements information system, including document generation, user management, among many other relevant processes. Implementing and designing the Frontend application in Angular.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: unadPathLogo,
    description: "Implementation of the LabInnova project used for the management and generation of educational digital resources. Creation of an avatar module in React, development of RESTful API in Java and Node.js, creation of user interface design for the different modules, decision-making, and client communication.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: ecopetrolPathLogo,
    description: "Creation of the WEB portal in Power Pages for the management and communication of mineral collection processes.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: sodexoPathLogo,
    description: "Creation of the WEB portal in Power Pages, implementation of automated workflows in Power Automate, and generation of business rules for the Dataverse. The system built aimed at managing occupational exams.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: bicodePathLogo,
    description: "Collaboration in the development of company-owned products, highlighting the creation of a WEB portal in next.js, which provides a complete workspace with the integration of GPT for managing and obtaining metrics corresponding to sales, purchases, etc.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  },
  {
    imagePath: wTechPathLogo,
    description: "Creation of an active learning system, where students' pronunciation is assessed, providing metrics and integrations with GPT for feedback on results.",
    technologies: [faAngular, faJs, faCss3, faHtml5]
  }
];
