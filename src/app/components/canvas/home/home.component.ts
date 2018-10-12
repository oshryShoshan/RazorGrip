import {Component, OnDestroy, OnInit} from '@angular/core';
import { CardLoaderService } from "../../../services/card-loader.service";
import { CardModel } from "../common/card/models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  protected card: CardModel;

  protected changeImageLabel = "replace image";
  private interval;
  constructor(private cardLoaderService: CardLoaderService) {
      this.startCardsInterval();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private startCardsInterval(): void {
    this.setCard();
    this.interval = setInterval(() => {
        this.setCard();
      }, 5000);
  }

  private setCard(): void {
    this.card = this.cardLoaderService.getCard();
  }

  onChangeImageButtonClicked(): void {
    clearInterval(this.interval);
    this.startCardsInterval();
  }
}
