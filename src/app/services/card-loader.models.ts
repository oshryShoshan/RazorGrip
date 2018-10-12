import { CardModel } from "../components/canvas/common/card/models";

export type FlickerResponse = {
  description: string,
  generator: string,
  items: FlickerResponseItem[],
  link: string,
  modified: string,
  title: string
}

export type FlickerResponseItem = {
  date_taken: string,
  description: string,
  media: {m: string},
  title: string
}

export type HistoryCards = {[cardId: string]: CardModel}
