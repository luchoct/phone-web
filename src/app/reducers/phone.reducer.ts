import { ActionReducer, Action } from '@ngrx/store';
import * as fromPhoneActions from '../actions/phone.actions';

import Phone from '../models/phone';

export interface State {
  phones: Phone[];
};

export const initialState: State = {
  phones: []
}

export function reducer(state = initialState, action: fromPhoneActions.Actions) {
  switch (action.type) {
    case fromPhoneActions.SEARCH: {
      return {phones: []};
    }

    case fromPhoneActions.SEARCH_COMPLETE: {
      return {
        phones: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getPhones = (state: State) => state.phones;
