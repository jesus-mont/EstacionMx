import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import"rxjs/Rx";
import {Videos} from '../Videos';
@Injectable()

export class VideosService {
domain: string= "https://estacionmx-api.herokuapp.com/api/videos";
  constructor(private http: HttpClient) { }

  getVideos(){
    return this.http.get<Videos[]>(`${this.domain}`).map(res=>res);
    
  }
  getVideo(id){
    return this.http.get<Videos>(`${this.domain}/${id}`).map(res=>res);
    
  }
  postVideo(newVideo: Videos){
    return this.http.post<Videos>(`${this.domain}`, newVideo).map(res=>res)
  }
  putVideo(newVideo){
    console.log(newVideo)
    return this.http.put<Videos>(`${this.domain}/${newVideo._id}`,newVideo).map(res=>res)
  }
  deleteVideo(id){
    return this.http.delete(`${this.domain}/${id}`).map(res=>res)
  }

}
