import {EAction} from "./enums";

export type Action = {
  actionType: EAction;
  actionTitle: string;
  callback: Function;
}
