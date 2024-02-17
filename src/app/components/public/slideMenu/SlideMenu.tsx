import { useContext } from "react";
import { routes } from "../../../utils/constants";
import Navigator from "../navigator/Navigator.tsx";
import { ScrollContext } from "../../../utils/contexts/ScrollContext.ts";
import slideMenuStyles from "./SlideMenu.module.css";

export const SlideMenu = () => {
  const { isVisibleSlide } = useContext(ScrollContext);

  return (
    <div className={slideMenuStyles.slideMenuContainer} style={{
      left: isVisibleSlide ? 0 : -200
    }}>
      <ul className={slideMenuStyles.slideMenuList}>
        <Navigator isSlideMenu={true} routes={routes} />
      </ul>
    </div>
  );
};
