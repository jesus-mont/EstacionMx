import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NoticiasService}from './services/noticias.service';
import {EventosService}from './services/eventos.service';
import {VideosService}from './services/videos.service';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AgregarNoticiaComponent } from './components/agregar-noticia/agregar-noticia.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { VideosComponent } from './components/videos/videos.component';
import { AgregarEventoComponent } from './components/agregar-evento/agregar-evento.component';
import { AgregarVideoComponent } from './components/agregar-video/agregar-video.component';
import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import { VerNotaComponent } from './components/ver-nota/ver-nota.component';
import { VerEventoComponent } from './components/ver-evento/ver-evento.component';
import { VerVideoComponent } from './components/ver-video/ver-video.component';
@NgModule({
  declarations: [
    AppComponent,
    NoticiasComponent,
    AgregarNoticiaComponent,
    EventosComponent,
    VideosComponent,
    AgregarEventoComponent,
    AgregarVideoComponent,
    VerNotaComponent,
    VerEventoComponent,
    VerVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     
    routes, 
    FormsModule
  ],
  providers: [NoticiasService, EventosService, VideosService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
