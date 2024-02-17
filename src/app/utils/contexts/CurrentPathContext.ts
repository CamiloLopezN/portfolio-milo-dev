import { createContext } from "react";
import { CurrentPathContextType } from "../types/CurrentPathContextTypes.ts";
import { RoutesPath } from "../constants";

export const CurrentPathContext = createContext<CurrentPathContextType>({
  currentPath: RoutesPath.HOME,
  setCurrentPath: () => {
  }
});