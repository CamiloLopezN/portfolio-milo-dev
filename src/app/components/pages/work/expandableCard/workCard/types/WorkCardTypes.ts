import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface WorkCardType {
  imagePath?: string,
  description: string,
  technologies: IconDefinition[]
  workImagesPath?: string[]
}