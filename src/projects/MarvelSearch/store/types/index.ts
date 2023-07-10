export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  stories: number;
  comics: number;
  series: number;
  events: number;
  //TODO: maybe consider listing (in other tab ?) the comics, series, events and stories 
}

export interface HeroState {
  heroes: Hero[];
}

export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_ERROR = "FETCH_HEROES_ERROR";
export const FETCH_HERO_LOADING = "FETCH_HERO_LOADING";

export interface FetchHeroesSuccessAction {
  type: typeof FETCH_HEROES_SUCCESS;
  payload: Hero[];
  loading: boolean;
};

export interface FetchHeroesErrorAction {
  type: typeof FETCH_HEROES_ERROR;
  payload: string;
  loading: boolean;
};

export interface FetchHeroesLoadingAction {
  type: typeof FETCH_HERO_LOADING;
  payload: boolean;
};

export type HeroActionTypes = 
  FetchHeroesSuccessAction |
  FetchHeroesErrorAction |
  FetchHeroesLoadingAction;
