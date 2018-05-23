import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';

import {Eventos} from '../../Eventos';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: Eventos[];

  constructor(private EventosService: EventosService ) {
    this.EventosService.getEventos().subscribe(eventos =>{
      this.eventos=eventos
      
      
    })
  }
  

  ngOnInit() {
  }

  deleteEvento(id){
    const response =confirm('estas seguro de que quieres eliminar este evento?')
    console.log(id)
    if(response){
      const eventos=this.eventos;
      this.EventosService.deleteEvento(id).subscribe((data:any)=>
      {console.log(data)
        if(data.n==1){
        for(let i=0; i<eventos.length; i++){
          if(eventos[i]._id==id){
            eventos.splice(i,1);}
        }
      }
    })
    }
    return;
 }

}
