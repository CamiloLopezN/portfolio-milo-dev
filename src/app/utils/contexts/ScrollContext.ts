import { createContext } from "react";
import { ScrollContextType } from "../types/ScrollContextTypes.ts";

export const ScrollContext = createContext<ScrollContextType>({
  isVisibleSlide: false,
  setIsVisibleSlide: () => {
  }
});