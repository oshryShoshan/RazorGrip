import { Component, OnInit } from '@angular/core';
import { HistoryCards } from "../../../services/card-loader.models";
import { CardLoaderService } from "../../../services/card-loader.service";
import { CardModel } from "../common/card/models";
import * as _ from "lodash";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  protected gridTemplateRows: string = '';
  protected historyCards: CardModel[] = [];
  protected card: CardModel;

  constructor(private cardLoaderService: CardLoaderService) {
    this.initHistoryCards()
    this.initGridTemplate();
  }

  ngOnInit() {
  }

  private initHistoryCards(): void {
    const history: HistoryCards = this.cardLoaderService.getHistory();
    const allHistoryCards = _.values(history);
    this.historyCards = _.take(allHistoryCards, 150);
  }

  private initGridTemplate(): void {
    const rowUnits = '70px';
    const size = Math.round(this.historyCards.length / 5) + 1;
    for (let i = 0; i < size; i++)
      this.gridTemplateRows = `${this.gridTemplateRows} ${rowUnits}`
  }

  protected onGalleryItemClicked($event: CardModel): void {
    this.card = $event;
  }
}
