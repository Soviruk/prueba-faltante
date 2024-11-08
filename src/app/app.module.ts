import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicanosComponent,
    ContactanosComponent,
    PieDePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
