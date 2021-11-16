import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadroComponent } from './quadro/quadro.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkAreaService } from './services/work-area.service';
import { NgDragDropModule } from 'ng-drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    QuadroComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgDragDropModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [
    WorkAreaService
  ]
})
export class WorkAreaModule { }
