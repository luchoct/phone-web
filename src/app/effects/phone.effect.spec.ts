import { TestBed } from '@angular/core/testing';
import { EffectsRunner, EffectsTestingModule } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { never } from 'rxjs/observable/never';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/throw';

import { PhoneEffects } from './phone.effect';
import { PhoneService } from '../services/phone.service';
import * as fromPhoneActions from '../actions/phone.actions';
import PHONE_LIST from '../../testing/phone-list-dummy';

describe('PhoneEffects', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      PhoneEffects,
      { provide: PhoneService, useValue: jasmine.createSpyObj('phoneService', ['getPhones']) }
    ]
  }));

  let runner, phoneEffects, phoneService;

  beforeEach(() => {
      runner = TestBed.get(EffectsRunner);
      phoneEffects = TestBed.get(PhoneEffects);
      phoneService = TestBed.get(PhoneService);
  });

  describe('searchPhones$', () => {
    it('should return a SEARCH_COMPLETE_ACTION action with phones, on success', () => {
      const expectedResult = new fromPhoneActions.SearchCompleteAction(PHONE_LIST);

      phoneService.getPhones.and.returnValue(of(PHONE_LIST));

      runner.queue(new fromPhoneActions.SearchAction());

      phoneEffects.searchPhones$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });

    it('should return a SEARCH_COMPLETE_ACTION with no phones on failure', () => {

      const expectedResult = new fromPhoneActions.SearchCompleteAction([]);

      phoneService.getPhones.and.returnValue(Observable.throw('error'));

      runner.queue(new fromPhoneActions.SearchAction());

      phoneEffects.searchPhones$.subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    });
  });
});
