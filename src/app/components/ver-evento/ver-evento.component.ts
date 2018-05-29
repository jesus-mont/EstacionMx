import { Component, OnInit } from '@angular/core';
import {Eventos} from '../../Eventos';
import {EventosService} from '../../services/eventos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit {
  evento: Eventos;
  id: string;
  editar:boolean;
  imagenP:String;
  constructor(private eventosService:EventosService, private route: ActivatedRoute) { 
    this.editar=true;
    console.log(this.route.snapshot.paramMap.get('id'))
    this.id=this.route.snapshot.paramMap.get('id')
    eventosService.getEvento(this.id).subscribe(evento=>{
      this.evento=evento
      console.log(this.evento)
    });
  }

  ngOnInit() {
  }
  modificar(){
    this.editar=false;
     }
     enviar(event){
       event.preventDefault();
       
       const newEvento:Eventos ={
         _id:this.evento._id,
         imagen:this.imagenP, 
         nombreEvent:this.evento.nombreEvent,
         fecha: this.evento.fecha,
         descripcionP:this.evento.descripcionP,
         linkBoletos:this.evento.linkBoletos,
         video:this.evento.video,
         categoria:this.evento.categoria
         
       };
       console.log(newEvento)
       this.eventosService.putEvento(newEvento).subscribe(res=>{
         console.log(res)
       })
     }
   
}
