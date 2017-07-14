import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { PhoneService } from '../services/phone.service';
import * as fromPhoneActions from '../actions/phone.actions';


@Injectable()
export class PhoneEffects {

  @Effect()
  searchPhones$: Observable<Action> = this.actions$
    .ofType(fromPhoneActions.SEARCH)
    .switchMap(() => {
      return this.service.getPhones()
        .map(phones => new fromPhoneActions.SearchCompleteAction(phones))
        .catch(() => of(new fromPhoneActions.SearchCompleteAction([])));
    });

    constructor(private actions$: Actions, private service: PhoneService) { }
}
