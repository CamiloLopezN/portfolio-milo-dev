import { WorkCardType } from "./types/WorkCardTypes.ts";

function WorkCard({ title, description }: WorkCardType) {
  return (
    <div style={{overflow: "hidden"}}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default WorkCard;