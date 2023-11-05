import { routes } from "../../../constants";
import workStyle from "./Work.module.css";


export default function Work() {


  return (
    <section id={routes.work.pathRoute} className={workStyle.sectionContainer} style={{ height: "20%" }}>
      <div className={workStyle.container}>
        <div className={workStyle.one}>One</div>
        <div className={workStyle.one}>Two</div>
        <div className={workStyle.one}>Three</div>
        <div className={workStyle.one}>Four</div>
        <div className={workStyle.one}>Five</div>
      </div>
    </section>
  );
}
