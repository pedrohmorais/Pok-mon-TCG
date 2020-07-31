import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'pkm-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards: any;

  constructor(
    private cardsService: CardsService,
  ) { }

  ngOnInit(): void {
    this.cardsService.getAll().then(pkm => {
      console.log('pkm');
      console.log(pkm);
      this.cards = pkm.slice(0, 4);
    });
  }
}
