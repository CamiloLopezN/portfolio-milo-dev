import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";
import meImage from "../../../../../assets/images/logo_ecopetrol.png";


export default function ExpandableCard(): JSX.Element {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <MagicCard
      isCardExpanded={isCardExpanded}
      onBackgroundFadeClick={() => setIsCardExpanded(false)}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        style={{
          width: isCardExpanded ? "40rem" : "17rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          padding: "1.35rem 0",
          color: isCardExpanded ? "white" : "currentColor"
        }}
      >
        <div style={{ overflowY: "auto", cursor: "pointer" }} onClick={() => setIsCardExpanded(!isCardExpanded)}>
          <img
            src={meImage}
            width={250}
            alt="Picture of the author"
          />
          {isCardExpanded && (
            <section
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }}
            >
              <h4 style={{ fontSize: "1.2em", fontWeight: 600 }}>
                Title: The Enigmatic Smile of Mona Lisa
              </h4>
              <p>
                Unveil the allure of the world-renowned masterpiece, the Mona
                Lisa, displayed in the heart of the Louvre Museum in Paris.
                Painted by the illustrious Leonardo da Vinci between 1503 and
                1506, this portrait is celebrated for Mona Lisa's enigmatic
                smile that seems to change depending on the viewing angle.
              </p>
              <p>
                The exquisite blending of light and shadow, known as sfumato,
                contributes to the mystique of her expression. Da Vinci’s
                remarkable attention to detail is evident in the delicate
                veiling and the meticulous background landscapes that frame Mona
                Lisa's serene demeanor.
              </p>
              <p>
                The artistry and the mysteries enveloping the Mona Lisa continue
                to captivate audiences, making it an enduring symbol of the
                Renaissance era. Experience the magnetism of the Mona Lisa, a
                testament to Leonardo da Vinci's genius, and delve into a visual
                dialogue with a smile that has intrigued the world for
                centuries.
              </p>
            </section>
          )}
        </div>
      </div>
    </MagicCard>
  );
}