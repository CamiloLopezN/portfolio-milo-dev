import { RoutesTypes } from "../types/RoutesTypes.ts";

export enum RoutesPath {
  HOME = "home",
  WORK = "work",
  SKILLS = "skills",
  ABOUT_ME = "about-me",
  CONTACT = "contact",
}

export enum RoutesIconPath {
  HOME = "home",
  WORK = "work",
  SKILLS = "skills",
  ABOUT_ME = "aboutMe",
  CONTACT = "contact",
}


export const routes: RoutesTypes[] = [
  { routeName: "Home", routePath: RoutesPath.HOME, routeIconPath: "home" },
  { routeName: "Work", routePath: RoutesPath.WORK, routeIconPath: "work" },
  { routeName: "Skills", routePath: RoutesPath.SKILLS, routeIconPath: "skills" },
  { routeName: "About Me", routePath: RoutesPath.ABOUT_ME, routeIconPath: "aboutMe" },
  { routeName: "Contact", routePath: RoutesPath.CONTACT, routeIconPath: "contact" }
];