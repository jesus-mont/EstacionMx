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
    this.noticiasService.getNoticias().subscribe(noticias =>{
      this.noticias=noticias
      
      
    })
   }


  

   deleteNoticia(id){
      const response =confirm('estas seguro de que quieres eliminar esta noticia?')
      console.log(id)
      if(response){
        const noticias=this.noticias;
        this.noticiasService.deleteNoticias(id).subscribe((data:any)=>
        {console.log(data)
          if(data.n==1){
          for(let i=0; i<noticias.length; i++){
            if(noticias[i]._id==id){
            noticias.splice(i,1);}
          }
        }
      })
      }
      return;
   }

  ngOnInit() {
  }

}
