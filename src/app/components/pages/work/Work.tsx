import { RoutesPath } from "../../../utils/constants";
import workStyle from "./Work.module.css";
import ExpandableCard from "./expandableCard/ExpandableCard.tsx";
import Section from "../../public/section/Section.tsx";


export default function Work() {


  return (
    <Section id={RoutesPath.WORK} title={"My Work"}>
      <div className={workStyle.cardsContainer}>
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
      </div>
    </Section>
  );
}
