import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import expandableCardStyle from "./ExpandableCard.module.css";
import "react-magic-motion/card.css";
import WorkCard from "./workCard/WorkCard.tsx";


interface ExpandableCardProps {
  meImage: string | undefined,
  description: string
}

export default function ExpandableCard({ meImage, description }: ExpandableCardProps) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div style={{ backgroundColor: isCardExpanded ? "#100b31" : "transparent", boxShadow: "0 8px 28px -9px rgba(0, 0, 0, 0.75)" }}
           className={`${expandableCardStyle.card}`} onClick={() => setIsCardExpanded(!isCardExpanded)}>
        <img
          src={meImage}
          height="50px"
          alt="Picture of the author"
        />
        {isCardExpanded && (
          <WorkCard title={"Hola"} description={description} />
        )}
      </div>
    </MagicCard>
  );
}