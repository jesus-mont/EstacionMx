import{ModuleWithProviders} from'@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AgregarNoticiaComponent } from './components/agregar-noticia/agregar-noticia.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { VideosComponent } from './components/videos/videos.component';
import { AgregarEventoComponent } from './components/agregar-evento/agregar-evento.component';
import { AgregarVideoComponent } from './components/agregar-video/agregar-video.component';
import { VerNotaComponent } from './components/ver-nota/ver-nota.component';

export const router: Routes=[
{path: '',redirectTo: 'noticias',pathMatch:'full' },
{path: 'noticias',component: NoticiasComponent},
{path: 'eventos',component: EventosComponent},
{path: 'videos',component: VideosComponent },
{path: 'agregar-noticia',component: AgregarNoticiaComponent},
{path: 'agregar-evento',component: AgregarEventoComponent },
{path: 'agregar-video',component: AgregarVideoComponent},
{path: 'noticias/:id',component: VerNotaComponent}
];

export const routes: ModuleWithProviders=RouterModule.forRoot(router);