import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import expandableCardStyle from "./ExpandableCard.module.css";
import "react-magic-motion/card.css";
import meImage from "../../../../../assets/images/logo_ecopetrol.png";
import WorkCard from "./workCard/WorkCard.tsx";


export default function ExpandableCard(): JSX.Element {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div style={{backgroundColor: isCardExpanded ? "black" : "transparent"}} className={`${expandableCardStyle.card}`} onClick={() => setIsCardExpanded(!isCardExpanded)}>
        <img
          src={meImage}
          width={250}
          alt="Picture of the author"
        />
        {isCardExpanded && (
          <WorkCard title={"Hola"} description={"Descripción"} />
        )}
      </div>
    </MagicCard>
  );
}