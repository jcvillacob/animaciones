import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwipperComponent } from './components/swipper/swipper.component';
import { Swipper2Component } from './components/swipper2/swipper2.component';
import { Swipper3Component } from './components/swipper3/swipper3.component';
import { Swipper4Component } from './components/swipper4/swipper4.component';
import { PopperComponent } from './components/popper/popper.component';
import { AosComponent } from './components/aos/aos.component';
import { ChardComponent } from './components/chard/chard.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenesComponent,
    NavbarComponent,
    SwipperComponent,
    Swipper2Component,
    Swipper3Component,
    Swipper4Component,
    PopperComponent,
    AosComponent,
    ChardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
