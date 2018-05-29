import { Component, OnInit } from '@angular/core';
import {Videos} from '../../Videos';
import {VideosService} from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-video',
  templateUrl: './ver-video.component.html',
  styleUrls: ['./ver-video.component.css']
})
export class VerVideoComponent implements OnInit {
  video: Videos;
  id: string;
  editar:boolean;
  constructor(private videoService: VideosService, private route: ActivatedRoute  ) {
    this.editar=true;
     console.log(this.route.snapshot.paramMap.get('id'))
     this.id=this.route.snapshot.paramMap.get('id')
     videoService.getVideo(this.id).subscribe(video=>{
       this.video=video
       console.log(this.video)
     });
     
    }

  ngOnInit() {
  }
  modificar(){
    this.editar=false;
     }
     enviar(event){
       event.preventDefault();
       
       const newVideo:Videos ={
         _id:this.video._id,
         titulo:this.video.titulo,
        
         descripcion:this.video.descripcion,
         url:this.video.url,
         imagen:this.video.imagen,
         like:this.video.like,
         dislike:this.video.dislike,
         fecha:this.video.fecha
       };
      
       this.videoService.putVideo(newVideo).subscribe(res=>{
         console.log(res)
       })
     }
   
   }
