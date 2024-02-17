import { RoutesPath } from "../../../utils/constants";
import workStyle from "./Work.module.css";
import ExpandableCard from "./expandableCard/ExpandableCard.tsx";


export default function Work() {


  return (
    <section id={RoutesPath.WORK} className={workStyle.sectionContainer}>
      <div className={workStyle.container}>
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />

      </div>
    </section>
  );
}
