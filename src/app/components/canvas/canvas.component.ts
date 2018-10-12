import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../services/navigation.service";
import { EAction } from "../../common/enums";

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  protected _EAction = EAction;
  protected currentView: EAction = EAction.navigateHome;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.navChange.subscribe(actionType => this.updateCurrentView(actionType));
  }

  private updateCurrentView(actionType: EAction): void {
    this.currentView = actionType;
  }

}
