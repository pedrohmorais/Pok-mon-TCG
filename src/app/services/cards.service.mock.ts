import { cards as cardsMock } from '../mocks/cards.mock';
import { CardsService } from './cards.service';

const cardService = new CardsService();
cardService.cards = cardsMock;

const cardServiceMock = {
  getAllCards: () => cardService.getAll(),
  getAll: params => cardService.getAll(params),
  filterCardsByName: params => cardService.filterCardsByName(params),
  getById: params => cardService.getById(params),
};

export {
  cardServiceMock,
};
