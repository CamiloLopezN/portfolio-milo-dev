import { routes } from "../../../constants";
import workStyle from "./Work.module.css";
import ExpandableCard from "./card/ExpandableCard.tsx";


export default function Work() {


  return (
    <section id={routes.work.pathRoute} className={workStyle.sectionContainer} style={{ height: "20%" }}>
      <div className={workStyle.container}>
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />
        <ExpandableCard />

      </div>
    </section>
  );
}
