import { RoutesPath } from "../../../utils/constants";
import workStyle from "./Work.module.css";
import ExpandableCard from "./expandableCard/ExpandableCard.tsx";
import Section from "../../public/section/Section.tsx";
import { workInfo } from "../../../utils/constants/WorkConstants.ts";


export default function Work() {


  return (
    <Section id={RoutesPath.WORK} title={"My Work"}>
      <div className={workStyle.cardsContainer}>
        {workInfo.map(({ imagePath, description }) => (<ExpandableCard meImage={imagePath} description={description} />))}
      </div>
    </Section>
  );
}
