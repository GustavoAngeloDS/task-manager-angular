import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenciadorQuadrosModule } from './gerenciador-quadros/gerenciador-quadros.module';
import { WorkAreaModule } from './work-area/work-area.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GerenciadorQuadrosModule,
    WorkAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
