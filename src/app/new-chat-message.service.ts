import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from './mensaje';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewChatMessageService {

  constructor(private httpClient: HttpClient) { }

   guardarUsuario(newMessage: Mensaje) {
    this.httpClient.post(environment.urlFireDatabase + 'array_mensajes.json', newMessage)
      .subscribe(
        (response) => console.log('Se han guardado los datos' + response),
        (error) =>
          console.log('Se ha presentado error en el envio de datos' + error)
      );
    }
    
    obtenerMensajes() {
      this.httpClient.get(environment.urlFireDatabase + 'array_mensajes.json')
        .subscribe(
          (response) => console.log('Se han guardado los datos' + response),
          (error) =>
            console.log('Se ha presentado error en el envio de datos' + error)
        );
  }
}
