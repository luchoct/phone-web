import { TestBed, async } from '@angular/core/testing';

import { AppContainer } from './app.container';
import { PhoneListStubContainer } from '../../testing/phone-list-stub.container';

describe('AppContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppContainer, PhoneListStubContainer
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppContainer);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Phone List Website');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppContainer);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Phone List Website');
  }));
});
