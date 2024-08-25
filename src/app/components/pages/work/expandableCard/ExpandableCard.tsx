import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import expandableCardStyle from "./ExpandableCard.module.css";
import "react-magic-motion/card.css";
import WorkCard from "./workCard/WorkCard.tsx";
import { WorkCardType } from "./workCard/types/WorkCardTypes.ts";

export default function ExpandableCard({ imagePath, description, technologies, workImagesPath }: WorkCardType) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div style={{
        backgroundColor: isCardExpanded ? "#100b31" : "transparent",
        boxShadow: "0 8px 28px -9px rgba(0, 0, 0, 0.75)"
      }}
           className={`${expandableCardStyle.card}`} onClick={() => setIsCardExpanded(!isCardExpanded)}>
        <img
          src={imagePath}
          height="50px"
          alt="Picture of the author"
        />
        {isCardExpanded && (
          <WorkCard description={description} technologies={technologies} workImagesPath={workImagesPath} />
        )}

      </div>
    </MagicCard>
  );
}