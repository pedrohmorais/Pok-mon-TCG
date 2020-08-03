import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsModule } from './cards/cards.module';
import { CardModule } from './card/card.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    loadChildren: () => CardsModule,
  },
  {
    path: 'card/:id',
    loadChildren: () => CardModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
