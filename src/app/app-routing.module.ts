import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'cards',
        loadChildren: () => CardsModule,
      },
      // {
      //   path: 'cards/detail/:tourId',
      //   loadChildren: './tours/detail/detail.module#DetailModule',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
