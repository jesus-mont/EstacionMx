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
    this.llenartabla()
  }

  ngOnInit() {
  }
  llenartabla(){
    this.VideosService.getVideos().subscribe(eventos =>{
      this.videos=eventos})
  }
  deleteVideo(id){
    const response =confirm('estas seguro de que quieres eliminar esta Video?')
    console.log(id)
    if(response){
      const videos=this.videos;
      this.VideosService.deleteVideo(id).subscribe((data:any)=>
      {console.log(data)
       
    })
    }
    this.llenartabla()
    return;
 }
}
