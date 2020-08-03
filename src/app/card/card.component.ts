import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../services/cards.service';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { BreadCrumb } from '../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'pkm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  id: string;
  loading = true;
  card: PokemonTCG.Card;
  breadCrumbs: BreadCrumb[] = [];

  constructor(
    private route: ActivatedRoute,
    private cardsService: CardsService,
  ) {
    this.id = this.route.snapshot.params.id;
  }

  private setLoaded(): void {
    this.loading = false;
  }

  hasAttacks(): boolean {
    const { attacks } = this.card;
    return !!(attacks && attacks[0]);
  }

  hasResistances(): boolean {
    const { resistances } = this.card;
    return !!(resistances && resistances[0]);
  }

  hasWeaknesses(): boolean {
    const { weaknesses } = this.card;
    return !!(weaknesses && weaknesses[0]);
  }

  setBreadcrumb(): void {
    this.breadCrumbs = [
      {
        label: 'Cards',
        url: '/cards',
      },
      {
        label: this.card.name,
        url: `/card/${this.id}`,
      },
    ];
  }

  ngOnInit(): void {
    this.cardsService.getById(this.id).then(r => {
      this.setLoaded();
      this.card = r;
      this.setBreadcrumb();
    });
  }

}
