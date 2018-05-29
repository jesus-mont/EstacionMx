import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import"rxjs/Rx";
import {Eventos} from '../Eventos';
@Injectable()

export class EventosService {
domain: string= "https://estacionmx-api.herokuapp.com/api/eventos";
  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get<Eventos[]>(`${this.domain}`).map(res=>res);
    
  }
  getEvento(id){
    return this.http.get<Eventos>(`${this.domain}/${id}`).map(res=>res);
    
  }
  postEventos(newEvento: Eventos){
    console.log(newEvento)
    return this.http.post<Eventos>(`${this.domain}`, newEvento).map(res=>res)
    
  }
  putEvento(newEvento){
    return this.http.put(`${this.domain}/${newEvento._id}`,newEvento).map(res=>res)
  }
  deleteEvento(id){
    return this.http.delete<Eventos>(`${this.domain}/${id}`).map(res=>res)
  }

}
