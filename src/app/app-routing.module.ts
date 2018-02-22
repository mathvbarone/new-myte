import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReembolsoComponent } from './reembolso/reembolso.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reembolso', component: ReembolsoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
