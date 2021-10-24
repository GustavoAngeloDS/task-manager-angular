import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './principal/menu/menu.component';
import { PrincipalModule } from './principal/principal.module';
import { WorkAreaModule } from './work-area/work-area.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    WorkAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
