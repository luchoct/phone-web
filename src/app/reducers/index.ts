import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';


import * as fromPhoneReducers from './phone.reducer';

export interface State {
  phone: fromPhoneReducers.State;
}

const reducers = {
  phone: fromPhoneReducers.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getPhoneState = (state: State) => state.phone;

export const getPhones = createSelector(getPhoneState, fromPhoneReducers.getPhones);
