import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusQuadrosComponent } from './meus-quadros/meus-quadros.component';
import { GerenciadorQuadrosService } from './services/gerenciador-quadros.service';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ModalExcluirQuadroComponent } from './modal-excluir-quadro/modal-excluir-quadro.component';


@NgModule({
  declarations: [
    MeusQuadrosComponent,
    ModalExcluirQuadroComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [
    GerenciadorQuadrosService
  ]
})
export class GerenciadorQuadrosModule { }
