import { Component, OnInit } from '@angular/core';
import {Noticias} from '../../Noticias';
import {NoticiasService} from '../../services/noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-nota',
  templateUrl: './ver-nota.component.html',
  styleUrls: ['./ver-nota.component.css']
})
export class VerNotaComponent implements OnInit {
  noticia: Noticias;
    id: string;
    editar:boolean;
  constructor(private noticiaService: NoticiasService, private route: ActivatedRoute  ) {
   this.editar=true;
    console.log(this.route.snapshot.paramMap.get('id'))
    this.id=this.route.snapshot.paramMap.get('id')
    noticiaService.getNoticia(this.id).subscribe(noticia=>{
      this.noticia=noticia
      console.log(this.noticia)
    });
    
   }

  ngOnInit() {
    
  }
  modificar(){
 this.editar=false;
  }
  enviar(event){
    event.preventDefault();
    
    const newNoticia:Noticias ={
      _id:this.noticia._id,
      imagenP: this.noticia.imagenP,
      tituloP:this.noticia.tituloP,
      descripcionP: this.noticia.descripcionP,
      imagenS:this.noticia.imagenS,
      tituloS: this.noticia.tituloS,
      editor: this.noticia.editor,
      texto:this.noticia.texto,
      linksimg: this.noticia.linksimg,
      linkf: this.noticia.linkf,
      video:this.noticia.video,
      fecha:this.noticia.fecha,
      categoria: this.noticia.categoria
    };
    console.log(newNoticia)
    this.noticiaService.putNoticias(newNoticia).subscribe(res=>{
      console.log(res)
    })
  }

}
