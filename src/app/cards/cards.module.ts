import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    FlexLayoutModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class CardsModule { }
