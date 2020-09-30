import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { cards as cardsMock } from '../mocks/cards.mock';

import { CardsService } from './cards.service';

describe('CardsService', () => {
  let injector: TestBed;
  let service: CardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    injector = getTestBed();
    service = TestBed.inject(CardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll() should return data', () => {
    spyOn(service, 'getAllCards').and.resolveTo(cardsMock);

    service.getAll({
      sortBy: 'name',
    }).then((res) => {
      expect(res).toEqual(cardsMock);
    });
  });

  it('getAll() should return data with previous cards', () => {
    spyOn(service, 'getAllCards').and.resolveTo(cardsMock);
    service.cards = cardsMock;

    service.getAll().then((res) => {
      expect(res).toEqual(cardsMock);
    });
  });


  it('filterCardsByName() should not return data', () => {
    expect(service.filterCardsByName('')).toEqual([]);
  });

  it('filterCardsByName() should return data', () => {
    service.cards = cardsMock;
    expect(service.filterCardsByName(cardsMock[0].name)).toEqual([cardsMock[0]]);
  });

  it('getById() should return data', () => {
    service.getById(cardsMock[0].id).then(card => {
      expect(card).toEqual(cardsMock[0]);
    });
  });

  it('getById() should return data with previous cards', () => {
    service.cards = cardsMock;
    service.getById(cardsMock[0].id).then(card => {
      expect(card).toEqual(cardsMock[0]);
    });
  });
});
