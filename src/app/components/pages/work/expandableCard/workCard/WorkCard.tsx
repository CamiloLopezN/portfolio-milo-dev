import { WorkCardType } from "./types/WorkCardTypes.ts";

function WorkCard({ title, description }: WorkCardType) {
  return (
    <div style={{overflow: "hidden", color: "#fff", fontSize: "1.5rem", fontWeight: "200"}}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default WorkCard;