import { Injectable } from '@angular/core';
import { EAction } from "../common/enums";
import { Action } from "../common/models";
import { NavigationService } from "./navigation.service";

@Injectable()
export class ActionsService {

  private actions: any;

  constructor(private navigationService: NavigationService) {
    this.initServices();
  }

  private initServices(): void {
    this.actions = {};
    this.actions[EAction.navigateHome] = this.generateAction(EAction.navigateHome,'home');
    this.actions[EAction.navigateHistory] = this.generateAction(EAction.navigateHistory, 'history');
  }

  private generateAction(actionType: EAction, actionName: string = 'untitled'): Action {
    return <Action> {
      actionType: actionType,
      actionTitle: actionName,
      callback: () => {this.navigationService.riseNavChange(actionType)}
    }
  }

  public getActions(actionType: EAction): Action {
    return this.actions[actionType];
  }
}
