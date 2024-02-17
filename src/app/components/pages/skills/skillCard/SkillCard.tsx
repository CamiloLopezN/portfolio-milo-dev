import skillCardStyles from "./SkillCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface SkillCardProps {
  name: string;
  icon: IconDefinition;
}

export default function SkillCard(props: SkillCardProps) {
  return (
    <div className={`${skillCardStyles.eCard} ${skillCardStyles.playing}`}>
        <div className={skillCardStyles.wave}></div>
        <div className={skillCardStyles.wave}></div>
        <div className={skillCardStyles.wave}></div>
        <div className={skillCardStyles.name}>{props.name}</div>
        <FontAwesomeIcon size={"4x"} icon={props.icon} />
    </div>
  );
}
