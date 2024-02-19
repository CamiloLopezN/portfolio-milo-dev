import navigatorStyles from "./Navigator.module.css";
import IconHome from "./icons/IconHome.tsx";
import IconCodeWorkingOutline from "./icons/IconCodeWorkingOutLine.tsx";
import IconAboutDotMe from "./icons/IconAboutDotMe.tsx";
import IconBxMessageDetail from "./icons/IconBxMessageDetail.tsx";
import IconHammer from "./icons/IconHammer.tsx";
import { RoutesTypes } from "../../../utils/types/RoutesTypes.ts";
import { RoutesIconPath, RoutesPath } from "../../../utils/constants";
import { CurrentPathContext } from "../../../utils/contexts/CurrentPathContext.ts";
import { useContext } from "react";

interface navigatorType {
  routes: RoutesTypes[];
  isSlideMenu?: boolean;
}

export default function Navigator({ routes, isSlideMenu }: navigatorType) {

  const { currentPath } = useContext(CurrentPathContext);

  return (
    <>
      {routes.map(({ routePath, routeIconPath, routeName }) => (
        <li className={navigatorStyles.navigatorItem} key={routePath}>
          <a
            className={
              currentPath === routePath
                ? navigatorStyles.navigatorSelectedLink
                : navigatorStyles.navigatorLink
            }
            href={routePath === RoutesPath.CONTACT ? "mailto:cristian.lopez09825@gmail.com" : `#${routePath}`}>

            {isSlideMenu && (
              <>
                {routeIconPath === RoutesIconPath.HOME && <IconHome />}
                {routeIconPath === RoutesIconPath.SKILLS && <IconHammer />}
                {routeIconPath === RoutesIconPath.WORK && <IconCodeWorkingOutline />}
                {routeIconPath === RoutesIconPath.ABOUT_ME && <IconAboutDotMe />}
                {routeIconPath === RoutesIconPath.CONTACT && <IconBxMessageDetail />}
              </>
            )}

            {isSlideMenu ?? routeName}

          </a>
        </li>
      ))}
    </>
  );
}
