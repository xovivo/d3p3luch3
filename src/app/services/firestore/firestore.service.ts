import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}


   public createPed(data: {nombre: string, url: string}) {
    return this.firestore.collection('pedido').add(data);
  }
  public getPed(documentId: string) {
    return this.firestore.collection('pedido').doc(documentId).snapshotChanges();
  }
  public getPeds() {
    return this.firestore.collection('peluches').snapshotChanges();
  }
  public updatePed(documentId: string, data: any) {
    return this.firestore.collection('pedido').doc(documentId).set(data);
  }
}
