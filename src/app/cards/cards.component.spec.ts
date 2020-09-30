import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { cards as cardsMock } from '../mocks/cards.mock';
import { CardsService } from '../services/cards.service';
import { cardServiceMock } from '../services/cards.service.mock';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      imports: [
        CommonModule,
        SharedModule,
        CardsRoutingModule,
        FlexLayoutModule,
        MatChipsModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: CardsService,
          useValue: cardServiceMock,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    component.cards = cardsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should showPageCards correctly', () => {
    expect(component.showPageCards()).toEqual(cardsMock);
  });

  it ('should paginate correctly', () => {
    expect(component.paginate({ pageIndex: 1, pageSize: 1 } as PageEvent)).toBe(undefined);
  });

  it ('should search for "pikachu"', () => {
    component.searchForm.controls.search.setValue('pikachu');
    fixture.detectChanges();
  });
});
