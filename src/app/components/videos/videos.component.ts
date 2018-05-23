import { Component, OnInit } from '@angular/core';
import {VideosService} from '../../services/videos.service';

import {Videos} from '../../Videos';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Videos[];

  constructor(private VideosService: VideosService, ) {
    this.VideosService.getVideos().subscribe(videos =>{
      this.videos=videos
      
      
    })
  }

  ngOnInit() {
  }
  deleteVideo(id){
    const response =confirm('estas seguro de que quieres eliminar esta Video?')
    console.log(id)
    if(response){
      const videos=this.videos;
      this.VideosService.deleteVideo(id).subscribe((data:any)=>
      {console.log(data)
        if(data.n==1){
        for(let i=0; i<videos.length; i++){
          if(videos[i]._id==id){
            videos.splice(i,1);}
        }
      }
    })
    }
    return;
 }
}
