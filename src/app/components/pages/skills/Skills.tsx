import { RoutesPath } from "../../../utils/constants";
import skillsStyle from "./Skills.module.css";
import SkillCard from "./skillCard/SkillCard.tsx";
import { SkillsInfo } from "../../../utils/constants/SkillsConstanst.ts";

export default function Skills() {
  return (
    <section id={RoutesPath.SKILLS} className={skillsStyle.sectionContainer}>
      <div>
        <h2 className={skillsStyle.title}>My Skills</h2>
      </div>
      <div className={skillsStyle.cardsContainer}>
        <div className={skillsStyle.container}>
          {SkillsInfo.map(({ name, icon }) => {
            return <SkillCard icon={icon} name={name} />;
          })}
        </div>
      </div>
    </section>
  );
}
