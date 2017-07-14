import { PhoneWebPage } from './app.po';

describe('phone-web App', () => {
  let page: PhoneWebPage;
  beforeEach(() => {
    page = new PhoneWebPage();
  });

  it('should display title message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Phone List Website');
  });

  it('should display list title message', () => {
    page.navigateTo();
    expect(page.getPhoneListTitleText()).toEqual('Available phones');
  });
});
