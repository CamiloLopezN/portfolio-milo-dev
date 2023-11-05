import { Dispatch, SetStateAction } from "react";

export interface ScrollContextType {
  isVisibleSlide: boolean;
  setIsVisibleSlide: Dispatch<SetStateAction<boolean>>;
}