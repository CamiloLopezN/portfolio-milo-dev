import { RoutesPath } from "../../../utils/constants";
import skillsStyle from "./Skills.module.css";
import Section from "../../public/section/Section.tsx";
import SkillCard from "./skillCard/SkillCard.tsx";
import { SkillsInfo } from "../../../utils/constants/SkillsConstanst.ts";

export default function Skills() {
  return (
    <Section id={RoutesPath.SKILLS} title={"My Skills"}>
      <div className={skillsStyle.cardsContainer}>
        {SkillsInfo.map(({ name, icon }) => {
          return <SkillCard key={name} icon={icon} name={name} />;
        })}
      </div>
    </Section>
  );
}
