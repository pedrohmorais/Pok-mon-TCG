import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the header title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Pokemon TGC');
  });

  it('should render 4 cards by default', () => {
    expect(page.getCardsCount()).toBe(4);
  });

  it('the first card name should start with "A"', () => {
    page.getFirstCardTitle().then(cardName => {
      expect(cardName.charAt(0)).toEqual('A');
    });
  });

  it('should search for "pikachu"', () => {
    page.searchField.sendKeys('pikachu');
    expect(page.getFirstCardTitle()).toEqual('Pikachu');
  });

  it('should click in "pikachu" detail and render new page with breadcrumb', () => {
    page.clickDetailsButton();
    expect(page.getBreadcrumbLastItem()).toEqual('Pikachu');
  });

  it('the h1 should have the "Pikachu" name', () => {
    page.getNameAndId().then(nameAndId => {
      expect(nameAndId.indexOf('Pikachu') !== -1).toBeTruthy();
    });
  });
});
