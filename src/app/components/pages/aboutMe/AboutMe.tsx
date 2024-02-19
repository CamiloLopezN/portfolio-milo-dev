import { RoutesPath } from "../../../utils/constants";
import aboutMeStyles from "./AboutMe.module.css";
import Section from "../../public/section/Section.tsx";
import meAbout from "../../../../assets/images/me-about.png";

export default function AboutMe() {
  return (
    <Section id={RoutesPath.ABOUT_ME} title={"About Me"}>
      <div className={aboutMeStyles.aboutMeContainer}>
        <div className={aboutMeStyles.aboutMe}>
          <p>
            Software developer with 2 years of experience in high impact projects. Efficient and clean solutions are my
            passion, as well as continuously learning new ways to take my knowledge to another level.
          </p>

          <div className={aboutMeStyles.timeline}>
            <div className="timeline-empty">
            </div>
            <div className={aboutMeStyles.timelineMiddle}>
              <div className={aboutMeStyles.timelineCircle}></div>
            </div>
            <div className={`${aboutMeStyles.timelineComponent} ${aboutMeStyles.timelineContent}`}>
              <h3 className={aboutMeStyles.titleText}>W-TECH SAS</h3>
              <p className={aboutMeStyles.descriptionText}>Developer</p>
            </div>
            <div className={`${aboutMeStyles.timelineComponent} ${aboutMeStyles.timelineContent}`}>
              <h3 className={aboutMeStyles.titleText}>BICODE SAS</h3>
              <p className={aboutMeStyles.descriptionText}>Solutions Specialist</p>
            </div>
            <div className={aboutMeStyles.timelineMiddle}>
              <div className={aboutMeStyles.timelineCircle}></div>
            </div>
            <div className="timeline-empty">
            </div>

            <div className="timeline-empty">
            </div>

            <div className={aboutMeStyles.timelineMiddle}>
              <div className={aboutMeStyles.timelineCircle}></div>
            </div>
            <div className={`${aboutMeStyles.timelineComponent} ${aboutMeStyles.timelineContent}`}>
              <h3 className={aboutMeStyles.titleText}>Soon</h3>
              <p className={aboutMeStyles.descriptionText}>Software Architect.</p>
            </div>

          </div>
        </div>
        <div className={aboutMeStyles.meImageContainer}>
          <img src={meAbout} alt="me-about" className={aboutMeStyles.meImage} />
        </div>
      </div>
    </Section>
  );
}
