import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorToastrService } from './services/error-toastr.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
  ],
  providers: [
    ErrorToastrService
  ]
})
export class SharedModule { }
