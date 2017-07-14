import { Action } from '@ngrx/store';
import Phone from '../models/phone';

export const SEARCH = '[Phone] Search';
export const SEARCH_COMPLETE = '[Phone] Search Complete';


export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor() { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Phone[]) { }
}

export type Actions = SearchAction | SearchCompleteAction;
