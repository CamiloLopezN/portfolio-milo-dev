import { WorkCardType } from "./types/WorkCardTypes.ts";
import workCardStyles from "./WordCard.module.css";

function WorkCard({ description }: WorkCardType) {
  return (
    <div style={{ overflow: "hidden", color: "#fff", fontSize: "1.5rem", fontWeight: "200" }}>

      <p className={workCardStyles.descriptionText}>{description}</p>

      <div>


      </div>

      {/*{technologies.map((technology, index) => {*/}
      {/*  { console.log(technology) }*/}
      {/*  return <FontAwesomeIcon key={index} size={"4x"} icon={technology} />;*/}
      {/*})}*/}

    </div>
  );
}

export default WorkCard;