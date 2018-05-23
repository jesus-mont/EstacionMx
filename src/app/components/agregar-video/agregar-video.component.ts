import { Component, OnInit } from '@angular/core';
import {VideosService} from '../../services/videos.service';
import {Videos} from '../../videos';
@Component({
  selector: 'app-agregar-video',
  templateUrl: './agregar-video.component.html',
  styleUrls: ['./agregar-video.component.css']
})
export class AgregarVideoComponent implements OnInit {
  titulo: string;
  descripcion:string;
  url:string;
  imagen:string;
  like:number=0;
  dislike:number=0;
  fecha:Date;
  constructor(private videosService: VideosService) { }

  ngOnInit() {
  }
  enviar(event){
    event.preventDefault();
 const newVideo: Videos= {
  titulo: this.titulo,
  descripcion:this.descripcion,
  url:this.url,
  imagen:this.imagen,
  like:this.like,
  dislike:this.dislike,
  fecha:this.fecha
  
 };
 console.log(newVideo);
 
  this.videosService.postVideo(newVideo).subscribe(data => {
    alert('ok');
}, error => {
  console.log(error.json());
});


}

  
}