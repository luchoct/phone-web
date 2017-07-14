import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs/observable/of';
import { never } from 'rxjs/observable/never';

import { PhoneListContainer } from './phone-list.container';
import * as fromPhoneActions from '../actions/phone.actions';
import * as fromReducers from '../reducers';
import { PhoneDetailComponent } from '../components/phone-detail.component';
import { SpinnerComponent } from '../components/spinner.component';
import PHONE_LIST from '../../testing/phone-list-dummy';

describe('PhoneListContainer', () => {

  let fixture: ComponentFixture<PhoneListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListContainer, PhoneDetailComponent, SpinnerComponent ],
      providers: [
        { provide: Store, useValue: jasmine.createSpyObj('store', ['dispatch', 'select']) }
      ]
    }).compileComponents();
  }));

  let store;

  beforeEach(() => {
    store = TestBed.get(Store);
  });

  it('should display list title on creation', () => {
    store.select.and.returnValue(never());
    fixture = TestBed.createComponent(PhoneListContainer);

    let comp: PhoneListContainer = fixture.componentInstance;
    comp.title = 'anyTitle';
    let el: HTMLElement = fixture.debugElement.query(By.css('.phone-list-title')).nativeElement;
    fixture.detectChanges();

    expect(el.textContent).toContain(comp.title);
  });

  it('should emit search action on creation', () => {
    store.select.and.returnValue(never());
    fixture = TestBed.createComponent(PhoneListContainer);

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(new fromPhoneActions.SearchAction());
  });

  it('should show spinner on creation', () => {
    store.select.and.returnValue(never());
    fixture = TestBed.createComponent(PhoneListContainer);

    fixture.detectChanges();

    let des: DebugElement = fixture.debugElement.query(By.directive(SpinnerComponent));
    expect(des).toBeTruthy();
  });

  it('should display phone details on retrieving phones', fakeAsync(() => {
    store.select.and.returnValue(of(PHONE_LIST));
    fixture = TestBed.createComponent(PhoneListContainer);

    fixture.detectChanges();
    tick();
    fixture.detectChanges();

    let des: DebugElement[] = fixture.debugElement.queryAll(By.directive(PhoneDetailComponent));
    expect(des.length).toBe(PHONE_LIST.length);
  }));
});
