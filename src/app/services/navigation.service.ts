import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { EAction } from "../common/enums";

@Injectable()
export class NavigationService {
  private currentAction: EAction = EAction.navigateHome;
  public navChange: Subject<EAction> = new Subject();

  constructor() { }

  public riseNavChange(actionType: EAction): void {
    if (this.currentAction != actionType) {
      this.navChange.next(actionType);
    }

    this.currentAction = actionType;
  }
}
