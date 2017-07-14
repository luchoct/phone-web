import { reducer } from './phone.reducer';
import * as fromPhoneReducers from './phone.reducer';
import * as fromPhoneActions from '../actions/phone.actions';
import Phone from '../models/phone';
import PHONE_LIST from '../../testing/phone-list-dummy';

describe('PhoneReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = reducer(undefined, action);
      expect(result).toEqual(fromPhoneReducers.initialState);
    });
  });

  describe('SEARCH', () => {
    it('should set empty phone list', () => {
      const action = new fromPhoneActions.SearchAction();

      const result = reducer(fromPhoneReducers.initialState, action);
      expect(result.phones).toEqual([]);
    });
  });

  describe('SEARCH_COMPLETE', () => {
    it('should set loaded phones', () => {
      const action = new fromPhoneActions.SearchCompleteAction(PHONE_LIST);

      const result = reducer(fromPhoneReducers.initialState, action);
      expect(result.phones).toEqual(PHONE_LIST);
    });
  });
});
