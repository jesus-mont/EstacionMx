import { Component, OnInit } from '@angular/core';
import {NoticiasService} from '../../services/noticias.service';

import {Noticias} from '../../Noticias';
import { identifierModuleUrl } from '@angular/compiler';




@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
noticias: Noticias[];
Id:String;
  constructor(private noticiasService: NoticiasService) {
    this.llenartabla()
   }


   llenartabla(){
    this.noticiasService.getNoticias().subscribe(eventos =>{
      this.noticias=eventos})
  }

   deleteNoticia(id){
      const response =confirm('estas seguro de que quieres eliminar esta noticia?')
      console.log(id)
      if(response){
        const noticias=this.noticias;
        this.noticiasService.deleteNoticias(id).subscribe((data:any)=>
        {console.log(data)
      })
      }
      this.llenartabla()
      return;
   }

  ngOnInit() {
  }

}
