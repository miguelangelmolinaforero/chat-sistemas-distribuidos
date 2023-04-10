import { Component } from '@angular/core';
import { Mensaje } from "src/app/mensaje";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  fecha_actual: Date = new Date;

  hora: number = this.fecha_actual.getHours();
  minutos: string = ('0' + this.fecha_actual.getMinutes().toString().slice(-2)).slice(-2);

  hora_actual: string = this.hora + ':' + this.minutos;
  contenido_mensaje: string = '';

  array_mensajes: Mensaje [] = [
    {
      fecha_mensaje: this.hora_actual,
      mensaje: 'mensaje de prueba'
    },
    {
      fecha_mensaje: this.hora_actual,
      mensaje: 'mensaje de prueba'
    },
    {
      fecha_mensaje: this.hora_actual,
      mensaje: 'mensaje de prueba'
    },
    {
      fecha_mensaje: this.hora_actual,
      mensaje: 'mensaje de prueba'
    }
  ];

  enviarMensaje(){
    if (this.contenido_mensaje != '') {   
      const nuevoMensaje: Mensaje = {
        fecha_mensaje: this.hora_actual,
        mensaje: this.contenido_mensaje
      };
      this.array_mensajes.push(nuevoMensaje);
      this.contenido_mensaje = '';
    }
  }
}
