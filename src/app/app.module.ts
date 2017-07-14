import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PhoneEffects } from './effects/phone.effect';
import { reducer } from './reducers';

import { AppContainer } from './containers/app.container';
import { PhoneListContainer } from './containers/phone-list.container';
import { PhoneDetailComponent } from './components/phone-detail.component';
import { SpinnerComponent } from './components/spinner.component';
import { PhoneService } from './services/phone.service';

@NgModule({
  declarations: [
    AppContainer,
    PhoneListContainer,
    PhoneDetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(PhoneEffects)
  ],
  providers: [PhoneService],
  bootstrap: [AppContainer]
})
export class AppModule { }
