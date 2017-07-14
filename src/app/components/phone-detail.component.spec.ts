import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { async } from '@angular/core/testing';

import { PhoneDetailComponent } from './phone-detail.component';

describe('PhoneDetailComponent', () => {

  let comp:    PhoneDetailComponent;
  let fixture: ComponentFixture<PhoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent);
    comp = fixture.componentInstance;
    comp.item = { id: 1, title: 'anyTitle', description: 'anyDescription', pictureId: 'anyPictureId', fee: 'anyFee', phoneFeatures: '[\"feature 1\",\"feature 2\"]'};
  });

  it('should display phone title', () => {
    let el: HTMLElement = fixture.debugElement.query(By.css('.phone-item')).nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('anyTitle');
  });

  it('should display phone description', () => {
    let el: HTMLElement = fixture.debugElement.query(By.css('.phone-item')).nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('anyDescription');
  });

  it('should display phone picture', () => {
    fixture.detectChanges();
    let de: DebugElement = fixture.debugElement.query(By.css('img'));
    expect(de.properties.src).toBe('assets/images/anyPictureId.jpg');
  });

  it('should display phone fee', () => {
    let el: HTMLElement = fixture.debugElement.query(By.css('.phone-item')).nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('anyFee');
  });

  it('should display phone features', () => {
    let el: HTMLElement = fixture.debugElement.query(By.css('.phone-item')).nativeElement;
    fixture.detectChanges();
    expect(el.textContent).toContain('feature 1');
    expect(el.textContent).toContain('feature 2');
  });
});
