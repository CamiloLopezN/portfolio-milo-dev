import { useContext } from "react";
import { routes } from "../../../constants";
import Navigator from "../navigator/Navigator.tsx";
import { ScrollContext } from "../../../contexts/ScrollContext.ts";
import slideMenuStyles from "./SlideMenu.module.css";

export const SlideMenu = () => {
  const { isVisibleSlide } = useContext(ScrollContext);

  return (
    <div className={slideMenuStyles.slideMenuContainer} style={{
      left: isVisibleSlide ? 0 : -200
    }}>
      <ul className={slideMenuStyles.slideMenuList}>
        <Navigator isSlideMenu={true}
                   routes={[
                     routes.home,
                     routes.work,
                     routes.skills,
                     routes.aboutMe,
                     routes.contact
                   ]}
        />
      </ul>
    </div>
  );
};
