import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { QuadroService } from './services/quadro.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CriarQuadroComponent } from './criar-quadro/criar-quadro.component';

@NgModule({
  declarations: [
    MenuComponent,
    CriarQuadroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    QuadroService
  ]
})
export class PrincipalModule { }
