import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusQuadrosComponent } from './meus-quadros/meus-quadros.component';
import { GerenciadorQuadrosService } from './services/gerenciador-quadros.service';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ModalExcluirQuadroComponent } from './modal-excluir-quadro/modal-excluir-quadro.component';
import { ModalAtualizarQuadroComponent } from './modal-atualizar-quadro/modal-atualizar-quadro.component';
import { FormsModule } from '@angular/forms';
import { ModalCriarQuadroComponent } from './modal-criar-quadro/modal-criar-quadro.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MeusQuadrosComponent,
    ModalExcluirQuadroComponent,
    ModalAtualizarQuadroComponent,
    ModalCriarQuadroComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    GerenciadorQuadrosService
  ]
})
export class GerenciadorQuadrosModule { }
