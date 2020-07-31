import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule,
    FlexLayoutModule,
  ]
})
export class CardsModule { }
