import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadroComponent } from './quadro/quadro.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkAreaService } from './services/work-area.service';
import { NgDragDropModule } from 'ng-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalCriarColunaComponent } from './modal-criar-coluna/modal-criar-coluna.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { ModalExcluirColunaComponent } from './modal-excluir-coluna/modal-excluir-coluna.component';

@NgModule({
  declarations: [
    QuadroComponent,
    ModalCriarColunaComponent,
    ModalExcluirColunaComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgDragDropModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [
    WorkAreaService
  ]
})
export class WorkAreaModule { }
