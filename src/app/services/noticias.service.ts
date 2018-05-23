import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import"rxjs/Rx";
import {Noticias} from '../Noticias';
@Injectable()

export class NoticiasService {
domain: string= "https://estacionmx-api.herokuapp.com/api/noticias";
id: string;
  constructor(private http: HttpClient) { }

  getNoticias(){
    return this.http.get<Noticias[]>(`${this.domain}`).map(res=>res);
    
  }
  getNoticia(id){
    return this.http.get<Noticias>(`${this.domain}/${id}`).map(res=>res);
    
  }
  postNoticias(newNoticia: Noticias){
    return this.http.post<Noticias>(`${this.domain}`, newNoticia).map(res=>res)
  }
  putNoticias(newNoticia:Noticias){
    return this.http.put<Noticias>(`${this.domain}/${newNoticia._id}`,newNoticia).map(res=>res)
  }
  deleteNoticias(id){
    return this.http.delete(`${this.domain}/${id}`).map(res=>res)
  }

}
