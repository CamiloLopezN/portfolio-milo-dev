import meImage from "../../../../assets/images/me.png";
import homeStyles from "./Home.module.css";
import { ME_IMAGE_TEXT, MY_NAME, routes, socialNetworks } from "../../../constants";

export default function Home() {
  const arraySocialNetworks = [
    socialNetworks.github,
    socialNetworks.linkedin,
    socialNetworks.instagram,
  ];

  return (
    <section className={homeStyles.sectionContainer} id={routes.home.pathRoute}>
      <div className={`${homeStyles.container} ${homeStyles.homeContainer}`}>
        <div className={homeStyles.divContainer}>
          <h1 className={homeStyles.nameText}>{MY_NAME}</h1>
          <p className={homeStyles.descriptionText}>
            Passionate about web development and interested in <br /> the
            implementation of new technologies that contribute to <br /> the
            advancement of the community and promote the use
            <br /> of IT as a solution to a wide range of current issues.
          </p>
          <div className={homeStyles.socialNetworksContainer}>
            {arraySocialNetworks.map((socialNetwork) => (
              <a key={socialNetwork.title} href={socialNetwork.url}>
                <img src={socialNetwork.src} alt={socialNetwork.title} />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`${homeStyles.divContainer} ${homeStyles.meImageContainer}`}>
          <img
            className={homeStyles.meImage}
            src={meImage}
            alt={ME_IMAGE_TEXT}
          />
        </div>
      </div>
    </section>
  );
}
