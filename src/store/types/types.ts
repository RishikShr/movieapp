import cardList from "../../model/cardList";
export interface MoviesState {
     data: cardList[];
     loading: boolean;
     error: boolean;
  }