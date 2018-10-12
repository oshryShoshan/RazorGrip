import { Component, OnInit } from '@angular/core';
import {Action} from "../../common/models";
import {EAction} from "../../common/enums";
import {ActionsService} from "../../services/actions.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public actions: Action[] = [];

  constructor(private actionService: ActionsService) { }

  ngOnInit() {
    this.initActions();
  }

  /*component initialization: */
  private initActions() {
    this.actions.push(this.actionService.getActions(EAction.navigateHome));
    this.actions.push(this.actionService.getActions(EAction.navigateHistory));
  }

  /*dom events: */
  public onActionClicked($event: Action): void {
    $event.callback();
  }

  /*local methods: */

  private generateAction(actionType: EAction, actionName: string = 'untitled'): Action {
    return <Action> {
      actionType: actionType,
      actionTitle: actionName
    }
  }

}
