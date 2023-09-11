import { Routes } from "../models";
import navigatorStyles from "./Navigator.module.css";

export default function Navigator({ routes }: Routes) {
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
            href={pathRoute}>
            {nameRoute}
          </a>
        </li>
      ))}
    </>
  );
}
