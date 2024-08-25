import { ME_IMAGE_TEXT, MY_NAME, RoutesPath, socialNetworks } from "../../../utils/constants";
import Header from "../../public/header/Header.tsx";
import homeStyles from "./Home.module.css";
import meImage from "../../../../assets/images/me.png";

export default function Home() {
  const arraySocialNetworks = [
    socialNetworks.github,
    socialNetworks.linkedin,
  ];

  return (
    <>
      <section id={RoutesPath.HOME} className={homeStyles.sectionContainer}>
        <Header />
        <div className={homeStyles.divContainer}>
          <div className={homeStyles.homeContainer}>
            <div className={homeStyles.infoContainer}>
              <h1 className={homeStyles.nameText}>{MY_NAME}</h1>
              <p className={homeStyles.descriptionText}>
                Passionate about web development and interested in the
                implementation of new technologies that contribute to the
                advancement of the community and promote the use
                of IT as a solution to a wide range of current issues.
              </p>
              <div className={homeStyles.socialNetworksContainer}>
                {arraySocialNetworks.map((socialNetwork) => (
                  <a key={socialNetwork.title} href={socialNetwork.url} target={"_blank"}>
                    <img src={socialNetwork.src} alt={socialNetwork.title} />
                  </a>
                ))}
              </div>
            </div>

            <img className={homeStyles.meImage} src={meImage} alt={ME_IMAGE_TEXT} />
          </div>
        </div>
      </section>
    </>
  );
}
