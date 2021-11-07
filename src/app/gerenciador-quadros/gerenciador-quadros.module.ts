import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusQuadrosComponent } from './meus-quadros/meus-quadros.component';
import { GerenciadorQuadrosService } from './services/gerenciador-quadros.service';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ModalExcluirQuadroComponent } from './modal-excluir-quadro/modal-excluir-quadro.component';
import { ModalAtualizarQuadroComponent } from './modal-atualizar-quadro/modal-atualizar-quadro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MeusQuadrosComponent,
    ModalExcluirQuadroComponent,
    ModalAtualizarQuadroComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule
  ],
  providers: [
    GerenciadorQuadrosService
  ]
})
export class GerenciadorQuadrosModule { }
