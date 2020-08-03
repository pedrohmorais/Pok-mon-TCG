import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

const defaultOptions = {
  sortBy: 'name',
};

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  // todo error handling

  private cards: PokemonTCG.Card[];

  constructor() { }

  compare( a, b, fieldName ): any {
    if (
      (!a || !a[fieldName])
      || (!b || !b[fieldName])
    ) {
      return;
    }
    if ( a[fieldName] < b[fieldName] ){
      return -1;
    }
    if ( a[fieldName] > b[fieldName] ){
      return 1;
    }
    return 0;
  }

  private setCards(cards): void {
    this.cards = cards;
  }

  getAll(options = defaultOptions): Promise<PokemonTCG.Card[]> {
    if (this.cards) {
      return new Promise((resolve) => resolve(this.cards));
    }
    return PokemonTCG.Card.all().then(p => {
      let response = p;
      if (options && options.sortBy) {
        response = p.sort(
          (a, b) => this.compare(a, b, options.sortBy)
        );
      }
      this.setCards(response);
      return response;
    });
  }

  filterCardsByName(name: string): PokemonTCG.Card[] {
    if (!this.cards) {
      return [];
    }

    return this.cards.filter(card => card.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  }

  getById(cardId: string): Promise<PokemonTCG.Card> {
    if (this.cards) {
      return new Promise((resolve) => resolve(this.cards.find(c => c.id === cardId)));
    }
    return PokemonTCG.Card.find(cardId);
  }
}
