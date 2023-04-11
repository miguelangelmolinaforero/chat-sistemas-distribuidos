import { Component } from '@angular/core';
import { Mensaje } from "src/app/mensaje";
import { NewChatMessageService } from 'src/app/new-chat-message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  fecha_actual: Date = new Date;

  contenido_mensaje: string = '';

  array_mensajes: Mensaje [] = [];

  constructor(
    private chatService: NewChatMessageService
  ){}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(messages => {
      this.array_mensajes = messages;
    });
  }

  async enviarMensaje(){
    if (this.contenido_mensaje != '') {   
      let hora: number = this.fecha_actual.getHours();
      let minutos: string = ('0' + this.fecha_actual.getMinutes().toString().slice(-2)).slice(-2);

      let hora_actual: string = hora + ':' + minutos;
      const nuevoMensaje: Mensaje = {
        fecha_mensaje: hora_actual,
        mensaje: this.contenido_mensaje
      };
      this.contenido_mensaje = '';

       await this.chatService.addMessage(nuevoMensaje);
    }
  }
}
