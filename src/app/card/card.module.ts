import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { SharedModule } from '../shared/shared.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardRoutingModule,
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatListModule,
    RouterModule,
  ]
})
export class CardModule { }
