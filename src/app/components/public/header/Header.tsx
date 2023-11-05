import Navigator from "./navigator/Navigator";
import headerStyles from "./Header.module.css";
import {
  routes,
  CLOSE_MENU,
  OPEN_MENU,
} from "../../../constants";
import MiloDevIcon from "../../icons/MiloDevIcon";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseMenuIcon from "./icons/CloseMenuIcon";

export default function Header() {
  return (
    <header className={headerStyles.headerContainer}>
      <nav
        className={`${headerStyles.container} ${headerStyles.navContainer}`}
        id="navMenu">
        <MiloDevIcon className={headerStyles.navLogo} />
        <ul className={headerStyles.navLinks}>
          <Navigator
            routes={[
              routes.home,
              routes.skills,
              routes.work,
              routes.aboutMe,
              routes.contact,
            ]}
          />
        </ul>
        <a
          href="#navMenu"
          className={headerStyles.navHamburger}
          title={OPEN_MENU}>
          <HamburgerMenuIcon
            className={headerStyles.navIcon}
          />
        </a>
        <a href="#" className={headerStyles.navClose} title={CLOSE_MENU}>
          <CloseMenuIcon
            className={headerStyles.navIcon}
          />
        </a>
      </nav>
    </header>
  );
}
