import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadroComponent } from './quadro/quadro.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkAreaService } from './services/work-area.service';

@NgModule({
  declarations: [
    QuadroComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  providers: [
    WorkAreaService
  ]
})
export class WorkAreaModule { }
