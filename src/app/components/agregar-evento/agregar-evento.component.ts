import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';
import {Eventos} from '../../Eventos';
@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {
  imagenP:String; 
  nombreEvent:String;
  fecha: Date;
  descripcionP:String;
  linkBoletos:String;
  video:String;
  categoria:String;
  constructor(private eventosService: EventosService) { }

  ngOnInit() {
  }
  enviar(event){
    event.preventDefault();
    
  const newEvento: Eventos= {
    imagen:this.imagenP,
    nombreEvent:this.nombreEvent,
    descripcionP: this.descripcionP,
    fecha:this.fecha,
    linkBoletos:this.linkBoletos,
    video:this.video,
    categoria:this.categoria
    
   };
  
   console.log(newEvento.imagen)
    this.eventosService.postEventos(newEvento).subscribe(data => {
      alert('ok');
      
  }, error => {
    console.log(error.json());
  });
  
}
}
