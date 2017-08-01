import { CarPartsShopPage } from './app.po';

describe('car-parts-shop App', () => {
  let page: CarPartsShopPage;

  beforeEach(() => {
    page = new CarPartsShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
