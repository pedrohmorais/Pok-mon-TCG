import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { cards as cardsMock } from '../../mocks/cards.mock';

const pokemonMock = cardsMock[0];

describe('Cards/CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        CommonModule,
        SharedModule,
        MatChipsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = pokemonMock;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title correctly', () => {
    expect(compiled.querySelector('mat-card-title').textContent).toBe(pokemonMock.name);
  });

  it('should render subtitle correctly', () => {
    expect(
      Array.from(
        compiled.querySelectorAll('mat-chip-list.types mat-chip')
      ).map((el: HTMLElement) => el.innerText)
    ).toEqual(pokemonMock.types);
  });
});
