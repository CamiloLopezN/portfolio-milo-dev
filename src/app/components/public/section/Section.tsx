import { ReactNode } from "react";
import sectionStyles from "./Section.module.css";
import { RoutesPath } from "../../../utils/constants";

interface SectionProps {
  id: RoutesPath;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className={sectionStyles.sectionContainer}>
      <h2 className={sectionStyles.title}>{title}</h2>
      <div className={sectionStyles.divContainer}>
        {children}
      </div>
    </section>
  );
}
