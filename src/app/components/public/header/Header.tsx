import Navigator from "../navigator/Navigator";
import headerStyles from "./Header.module.css";
import { CLOSE_MENU, OPEN_MENU, routes } from "../../../utils/constants";
import MiloDevIcon from "./icons/MiloDevIcon.tsx";
import HamburgerMenuIcon from "./icons/HamburgerMenuIcon";
import CloseMenuIcon from "./icons/CloseMenuIcon";
import { useContext, useEffect, useRef } from "react";
import { ScrollContext } from "../../../utils/contexts/ScrollContext.ts";

export default function Header() {
  const divRef = useRef<HTMLElement>(null);
  const { setIsVisibleSlide } = useContext(ScrollContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > divRef.current!.getBoundingClientRect().bottom) {
        setIsVisibleSlide(true);
        return;
      }
      setIsVisibleSlide(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [divRef, setIsVisibleSlide]);

  return (
    <header ref={divRef} className={headerStyles.headerContainer}>
      <nav
        className={`${headerStyles.container} ${headerStyles.navContainer}`}
        id="navMenu">
        <MiloDevIcon className={headerStyles.navLogo} />
        <ul className={headerStyles.navLinks}>
          <Navigator
            routes={routes}
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
