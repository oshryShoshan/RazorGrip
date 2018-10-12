import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CardModel } from "../components/canvas/common/card/models";
import { FlickerResponse, HistoryCards } from "./card-loader.models";
import * as _ from "lodash";

//in order to use the flickerURL pls run chrome under this configuration:
// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
const flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"

@Injectable()
export class CardLoaderService {

  private cards: CardModel[] = [];
  private history: HistoryCards = {};

  constructor(private http: HttpClient) {
    this.startLoadingCards();
  }

  public getCard(): CardModel {
    const card = this.cards.pop();
    if (card)
      this.history[card.image] = card;

    return card;
  }

  private startLoadingCards(): void {

    this.load();

    setInterval(()=> {
      if (this.cards.length < 50) {
        this.load();
      }
    },3000);
  }

  private load(): void {
    this.http.get(flickerURL).subscribe(
      (res) => this.loadResponse(res as FlickerResponse),
      (err) => this.handleLoadingError(err),
      () => console.log('loaded a new packet'));
  }

  private loadResponse(data: FlickerResponse): void {
    console.log(data);

    const filtered = _.filter(data.items, item => {
      return (!_.find(this.cards, card => { card.image == item.media.m })
              && !this.history[item.media.m]);
    });

    const newCards: CardModel[] = filtered.map(item => <CardModel>{
      image: item.media.m,
      title: item.title,
      description: item.description,
      date: item.date_taken,
    });

    this.cards = _.concat(this.cards, newCards);
  }

  private handleLoadingError(err): void {
    console.log("error while loading data: ", err);
  }

  public getHistory(): HistoryCards {
    return this.history;
  }

}


