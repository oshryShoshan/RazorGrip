import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModel } from "./models";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardModel: CardModel;
  @Input() buttonLabel: string;
  @Output() onChangeImg: EventEmitter<any> = new EventEmitter<any>();
  protected labels: any;

  constructor() {
    this.initLabels();
  }

  ngOnInit() {
  }

  private initLabels(): void {
    this.labels = {
      title: "title",
      dateTaken: "date taken",
      description: "description",
      errorMsg: "Oops.... nothing to present yet"
    }
  }

  protected onButtonClicked(): void {
    console.log("request to replace image");
    this.onChangeImg.emit();
  }
}
