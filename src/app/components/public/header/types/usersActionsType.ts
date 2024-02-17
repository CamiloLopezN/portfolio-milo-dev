export interface UserAction {
  // pathIcon: StaticImageData;
  nameAction: string;
  onClickFunction?: () => void;
}

export interface UserActions {
  userActions: UserAction[];
}
