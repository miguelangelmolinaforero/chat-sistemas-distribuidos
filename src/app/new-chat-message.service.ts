import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from './mensaje';
import { environment } from 'src/environments/environment';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, collectionGroup } from '@angular/fire/firestore';
import { Observable, forkJoin, switchMap } from 'rxjs';

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

  // deleteMessages() {
  //   const nodoMensaje = doc(this.firestore, 'Mensaje');
  //   return deleteDoc(nodoMensaje);
  // }

  deleteMessages() {
    const collectionRef = collection(this.firestore, 'Mensajes');
    return collectionData(collectionRef).pipe(
      switchMap((messages) => {
        const deletePromises = messages.map((message) => {
          return deleteDoc(doc(this.firestore, 'Mensajes', message['contenido_mensaje']));
        });
        return forkJoin(deletePromises);
      })
    );
  }

}
