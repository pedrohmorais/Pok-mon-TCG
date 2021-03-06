import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { SharedModule } from '../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { cards as cardsMock } from '../mocks/cards.mock';
import { Observable, from } from 'rxjs';
import { CardsService } from '../services/cards.service';
import { cardServiceMock } from '../services/cards.service.mock';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports: [
        CommonModule,
        SharedModule,
        CardRoutingModule,
        MatButtonModule,
        FlexLayoutModule,
        MatChipsModule,
        MatExpansionModule,
        MatListModule,
        RouterModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: from([{id: cardsMock[0].id}]),
            },
          },
        },
        {
          provide: CardsService,
          useValue: cardServiceMock,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = cardsMock[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has attacks', () => {
    expect(component.hasAttacks()).toBeTruthy();
  });

  it('should has attacks', () => {
    expect(component.hasResistances()).toBeFalse();
  });

  it('should has attacks', () => {
    expect(component.hasWeaknesses()).toBeTruthy();
  });
});
