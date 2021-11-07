import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusQuadrosComponent } from './gerenciador-quadros/meus-quadros/meus-quadros.component';

const routes: Routes = [
  {
    path: '',
    component: MeusQuadrosComponent
  },
  {
    path: 'meus-quadros',
    component: MeusQuadrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
