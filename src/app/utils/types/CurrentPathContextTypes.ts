import { Dispatch, SetStateAction } from "react";
import { RoutesPath } from "../constants";

export interface CurrentPathContextType {
  currentPath: RoutesPath;
  setCurrentPath: Dispatch<SetStateAction<RoutesPath>>;
}

