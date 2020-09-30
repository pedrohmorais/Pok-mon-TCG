import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  searchField = element(by.id('search-field'));

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('mat-toolbar-row h1')).getText() as Promise<string>;
  }

  getCards(): ElementArrayFinder {
    return element.all(by.css('.cards-container pkm-card'));
  }

  getCardsCount(): Promise<number> {
    return this.getCards().count() as Promise<number>;
  }

  getFirstCard(): ElementFinder {
    return this.getCards().first();
  }

  getFirstCardTitle(): Promise<string> {
    return this.getFirstCard().element(by.css('mat-card-title')).getText() as Promise<string>;
  }

  getBreadcrumb(): ElementFinder {
    return element(by.id('breadcrumb'));
  }

  getBreadcrumbLastItem(): Promise<string> {
    return this.getBreadcrumb().element(by.css('.last-item')).getText() as Promise<string>;
  }

  getNameAndId(): Promise<string> {
    return element(by.css('.name-and-id')).getText() as Promise<string>;
  }

  clickDetailsButton(): void {
    this.getFirstCard().element(by.css('.details-button')).click();
  }
}
