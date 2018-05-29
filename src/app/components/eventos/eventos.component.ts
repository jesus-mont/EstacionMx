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
    this.llenartabla()
  }
  

  ngOnInit() {
  }
llenartabla(){
  this.EventosService.getEventos().subscribe(eventos =>{
    this.eventos=eventos})
}
  deleteEvento(id){
    const response =confirm('estas seguro de que quieres eliminar este evento?')
    console.log(id)
    if(response){
      const eventos=this.eventos;
      this.EventosService.deleteEvento(id).subscribe(data=>
      {console.log(data)

       
    })
    }
    this.llenartabla()
    return;
 }

}
