import navigatorStyles from "./Navigator.module.css";
import { Routes } from "../models/routes.model.ts";
import { routes as getRoutes } from "../../../constants";
import IconHome from "./icons/IconHome.tsx";
import IconCodeWorkingOutline from "./icons/IconCodeWorkingOutLine.tsx";
import IconAboutDotMe from "./icons/IconAboutDotMe.tsx";
import IconBxMessageDetail from "./icons/IconBxMessageDetail.tsx";
import IconHammer from "./icons/IconHammer.tsx";

interface navigatorType {
  isSlideMenu?: boolean;
}

export default function Navigator({ routes, isSlideMenu }: Routes & navigatorType) {
  //const pathname = usePathname();
  const pathName = "/";

  return (
    <>
      {routes.map(({ nameRoute, pathRoute, pathIconRoute }) => (
        <li className={navigatorStyles.navigatorItem} key={pathRoute}>
          <a
            className={
              pathName === pathRoute
                ? navigatorStyles.navigatorSelectedLink
                : navigatorStyles.navigatorLink
            }
            href={`#${pathRoute}`}>

            {isSlideMenu && (
              <>
                {pathIconRoute === getRoutes.home.pathIconRoute && <IconHome />}
                {pathIconRoute === getRoutes.skills.pathIconRoute && <IconHammer />}
                {pathIconRoute === getRoutes.work.pathIconRoute && <IconCodeWorkingOutline />}
                {pathIconRoute === getRoutes.aboutMe.pathIconRoute && <IconAboutDotMe />}
                {pathIconRoute === getRoutes.contact.pathIconRoute && <IconBxMessageDetail />}
              </>
            )}

            {isSlideMenu ?? nameRoute}

          </a>
        </li>
      ))}
    </>
  );
}
