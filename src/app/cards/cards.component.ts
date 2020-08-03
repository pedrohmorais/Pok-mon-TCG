import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { PageEvent } from '@angular/material/paginator';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pkm-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards: any;
  page = 0;
  pageSize = 4;
  searchForm: FormGroup;
  loading = true;

  constructor(
    private cardsService: CardsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cardsService.getAll().then(pkm => {
      this.cards = pkm;
      this.loading = false;
    });
    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control(''),
    });
    this.searchForm.controls.search.valueChanges.subscribe(change => {
      this.cards = this.cardsService.filterCardsByName(change);
      this.page = 0;
    });
  }

  showPageCards(): void {
    return this.cards.slice(
      this.page * this.pageSize,
      (this.page + 1) * this.pageSize
    );
  }

  paginate(ev: PageEvent): void {
    this.page = ev.pageIndex;
    this.pageSize = ev.pageSize;
  }
}
