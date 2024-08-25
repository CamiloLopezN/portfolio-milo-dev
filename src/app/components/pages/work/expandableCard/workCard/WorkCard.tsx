import { WorkCardType } from "./types/WorkCardTypes.ts";
import workCardStyles from "./WordCard.module.css";


function WorkCard({ description, workImagesPath }: WorkCardType) {
  return (
    <div style={{
      overflow: "hidden",
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: "200",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }}>
      <p className={workCardStyles.descriptionText}>{description}</p>
      <div style={{ flex: 1, overflow: "auto", padding: "1rem" }}>
        {workImagesPath && workImagesPath.map((imagePath) => {
          return <img src={imagePath} alt="work" className={workCardStyles.workImage} />;
        })}
      </div>
    </div>
  );
}

export default WorkCard;