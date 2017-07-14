import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

import * as fromPhoneActions from '../actions/phone.actions';
import Phone from '../models/phone';
import * as fromReducers from '../reducers';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.container.html',
  styleUrls: ['./phone-list.container.css']
})

export class PhoneListContainer {
  public title: string = 'Available phones';
  public phones$: Observable<Phone[]>;

  constructor(store: Store<fromReducers.State>) {
    store.dispatch(new fromPhoneActions.SearchAction());
    this.phones$ = store.select(fromReducers.getPhones);
  };
}
