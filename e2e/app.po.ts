import { browser, by, element } from 'protractor';

export class PhoneWebPage {
  LOADING_TIME = 5000;

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getPhoneListTitleText() {
    return element(by.css('.phone-list-title')).getText();
  }
}
