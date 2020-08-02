import { Injectable } from '@angular/core';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';

const defaultOptions = {
  sortBy: 'name',
};

@Injectable({
  providedIn: 'root'
})
export class CardsService {

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

  getAll(options = defaultOptions): Promise<PokemonTCG.Card[]> {
    return PokemonTCG.Card.all().then(p => {
      let response = p;
      if (options && options.sortBy) {
        response = p.sort(
          (a, b) => this.compare(a, b, options.sortBy)
        );
      }
      return response;
    });
  }

  getById(cardId: string): Promise<PokemonTCG.Card> {
    return PokemonTCG.Card.find(cardId);
  }
}
