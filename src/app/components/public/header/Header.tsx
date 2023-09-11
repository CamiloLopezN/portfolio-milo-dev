import Navigator from "./navigator/Navigator";
import headerStyles from "./Header.module.css";
import {
  routes,
  CLOSE_MENU,
  CLOSE_MENU_ICON,
  OPEN_MENU,
  OPEN_MENU_ICON,
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
        <h2 className={headerStyles.navText}>
          Full-Stack <strong>Developer</strong>
        </h2>
        <a
          href="#navMenu"
          className={headerStyles.navHamburger}
          title={OPEN_MENU}>
          <HamburgerMenuIcon
            className={headerStyles.navIcon}
            alt={OPEN_MENU_ICON}
          />
        </a>
        <a href="#" className={headerStyles.navClose} title={CLOSE_MENU}>
          <CloseMenuIcon
            className={headerStyles.navIcon}
            alt={CLOSE_MENU_ICON}
          />
        </a>
      </nav>
    </header>
  );
}
