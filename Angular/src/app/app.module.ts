import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ClienteModule } from './cliente/cliente.module';
import { GeneracionesModule } from './generaciones/generaciones.module';
import { CursosModule } from './cursos/cursos.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';
import { CertificadoModule } from './certificado/certificado.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ClienteModule,
    GeneracionesModule,
    CursosModule,
    CalificacionesModule,
    CertificadoModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
