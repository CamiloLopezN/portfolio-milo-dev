import {
    Github,
    Linkedin,
    Instagram,
    Code2,
    Database,
    Server,
    Layout,
    Globe,
    Layers,
    LucideIcon
} from 'lucide-react';
import { IconType } from 'react-icons';
import { SiDotnet } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

// Interfaces
export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
}

export interface Skill {
    name: string;
    icon: string;
    color: string;
}

export interface WorkExperience {
    id: number;
    company: string;
    role: string;
    description: string;
    tags: string[];
    logo: string;
    screenshots: string[];
}

// Data
export const MY_NAME = "Cristian López";
export const MY_TITLE = "Full-Stack Developer";
export const MY_DESCRIPTION = "Passionate about web development and interested in the implementation of new technologies that contribute to the advancement of the community and promote the use of IT as a solution to a wide range of current issues.";

export const socialLinks: SocialLink[] = [
    { name: "Github", url: "https://github.com/CamiloLopezN", icon: Github },
    { name: "Linkedin", url: "https://www.linkedin.com/in/cristian-lopez-dev/", icon: Linkedin },
    { name: "Instagram", url: "https://www.instagram.com/milodev1031", icon: Instagram },
];

export const skillsData: Skill[] = [
    { name: "HTML", icon: "html", color: "text-orange-500" },
    { name: "CSS3", icon: "css", color: "text-blue-500" },
    { name: "JavaScript", icon: "js", color: "text-yellow-400" },
    { name: "Java", icon: "java", color: "text-red-500" },
    { name: "TypeScript", icon: "ts", color: "text-blue-600" },
    { name: "React", icon: "react", color: "text-cyan-400" },
    { name: "Angular", icon: "angular", color: "text-red-600" },
    { name: "SQL/NoSQL", icon: "sql", color: "text-green-500" },
    { name: "Next.js", icon: "next", color: "text-white" },
    { name: "Node.js", icon: "node", color: "text-green-600" },
    { name: ".NET Core", icon: "net", color: "text-purple-500" },
    { name: "Azure", icon: "azure", color: "text-blue-400" }
];

export const workData: WorkExperience[] = [
    {
        id: 1,
        company: "Universidad del Rosario",
        role: "Frontend & Backend Dev",
        description: "Contributed in the creation of the frontend with Angular and the backend with .NET Core 6. Direct client contact to solve technical doubts.",
        tags: ["Angular", ".NET Core"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=UR",
        screenshots: []
    },
    {
        id: 2,
        company: "MinMinas",
        role: "Interoperability Engineer",
        description: "Crucial position in the interoperability team, creating Azure functions for data scraping and government portal queries.",
        tags: ["Azure", "Scraping", "Node.js"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=MinMinas",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Azure+Dashboard", "https://placehold.co/800x450/111/FFF?text=Data+Flow"]
    },
    {
        id: 3,
        company: "MinTrabajo",
        role: "Full Stack Dev",
        description: "Building microservices in .NET Core for International Pension Agreements. Designing Frontend in Angular.",
        tags: [".NET Core", "Angular", "Microservices"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=MinTrabajo",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Login+Screen", "https://placehold.co/800x450/111/FFF?text=Dashboard"]
    },
    {
        id: 4,
        company: "UNAD",
        role: "Full Stack Dev",
        description: "Implementation of LabInnova project. Creation of an avatar module in React, RESTful API in Java and Node.js.",
        tags: ["React", "Java", "Node.js"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=UNAD",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Avatar+Module", "https://placehold.co/800x450/111/FFF?text=LabInnova+Home"]
    },
    {
        id: 5,
        company: "Ecopetrol",
        role: "Power Pages Dev",
        description: "Creation of the WEB portal in Power Pages for the management and communication of mineral collection processes.",
        tags: ["Power Pages", "Dataverse"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=Ecopetrol",
        screenshots: []
    },
    {
        id: 6,
        company: "Sodexo",
        role: "Power Platform Dev",
        description: "Creation of WEB portal in Power Pages, automated workflows in Power Automate, and business rules for Dataverse.",
        tags: ["Power Automate", "Sodexo"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=Sodexo",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Occupational+Exams", "https://placehold.co/800x450/111/FFF?text=Workflow"]
    },
    {
        id: 7,
        company: "Bicode",
        role: "Next.js Developer",
        description: "Development of company-owned products, highlighting a WEB portal in Next.js with GPT integration for analytics.",
        tags: ["Next.js", "AI/GPT", "Analytics"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=Bicode",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Analytics+Home", "https://placehold.co/800x450/111/FFF?text=AI+Chat"]
    },
    {
        id: 8,
        company: "W-Tech",
        role: "Frontend Innovation",
        description: "Active learning system where students' pronunciation is assessed using AI metrics.",
        tags: ["AI", "React", "Speech"],
        logo: "https://placehold.co/100x100/1e293b/FFF?text=W-Tech",
        screenshots: ["https://placehold.co/800x450/111/FFF?text=Avatars", "https://placehold.co/800x450/111/FFF?text=Scenarios"]
    }
];

export const iconMap: Record<string, LucideIcon | IconType> = {
    html: Layout,
    css: Layers,
    js: Code2,
    java: Server,
    ts: Code2,
    react: Globe,
    angular: Layers,
    sql: Database,
    next: Globe,
    node: Server,
    net: SiDotnet,
    azure: VscAzure
};
