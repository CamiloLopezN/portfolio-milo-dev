import { RoutesPath } from "../../../utils/constants";
import aboutMeStyles from "./AboutMe.module.css";
import Section from "../../public/section/Section.tsx";

export default function AboutMe() {
  return (
    <Section id={RoutesPath.ABOUT_ME} title={"About Me"}>
      <div className={aboutMeStyles.aboutMeContainer}>

      </div>
    </Section>
  );
}
