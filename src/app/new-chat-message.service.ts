import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewChatMessageService {

  constructor(private firestore: Firestore) { }

  addMessage(mensaje: Mensaje){
    const nodoMensaje = collection(this.firestore, 'Mensaje');
    return addDoc(nodoMensaje, mensaje);
  }
  
  getMessages(): Observable<Mensaje[]> {
    const nodoMensaje = collection(this.firestore, 'Mensaje');
    return collectionData(nodoMensaje, {idField: 'id'}) as Observable<Mensaje[]>;
  }

}
