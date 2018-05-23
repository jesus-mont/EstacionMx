import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';
import {Eventos} from '../../Eventos';
@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {
  imagenP:string; 
  nombreEvent:string;
  fecha: Date;
  descripcionP:string;
  linkBoletos:string;
  video:string;
  constructor(private eventosService: EventosService) { }

  ngOnInit() {
  }
  enviar(event){
    event.preventDefault();
    
  const newEvento: Eventos= {
    imagenP:this.imagenP,
    nombreEvent:this.nombreEvent,
    descripcionP: this.descripcionP,
    fecha:this.fecha,
    linkBoletos:this.linkBoletos,
    video:this.video
    
   };
  
   console.log(newEvento.imagenP)
    this.eventosService.postEventos(newEvento).subscribe(data => {
      alert('ok');
      console.log(data)
  }, error => {
    console.log(error.json());
  });
  
}
}
