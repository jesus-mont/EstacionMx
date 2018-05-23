import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';
import {Noticias} from '../../noticias';


@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.css']
})
export class AgregarNoticiaComponent implements OnInit {
imagenP:string;
tituloP:string;
tituloS:string;
descripcion:string;
imagenS:string;
fecha:Date;
texto:string;
editor:string;
categoria:string;
linksimg:string;
linkf:string;
video:string;

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
  }
  enviar(event){
    event.preventDefault();
 const newNoticia: Noticias= {
  imagenP: this.imagenP,
  tituloP:this.tituloP,
  descripcionP: this.descripcion,
  imagenS:this.imagenS,
  tituloS: this.tituloS,
  editor: this.editor,
  texto:this.texto,
  linksimg: this.linksimg,
  linkf: this.linkf,
  video:this.video,
  fecha:this.fecha,
  categoria: this.categoria
  
 };
 console.log(newNoticia);
 
  this.noticiasService.postNoticias(newNoticia).subscribe(data => {
    alert('ok');
}, error => {
  console.log(error.json());
});


}

  
}
