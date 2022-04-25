import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private firestore: Firestore) {}

  addAnimalToDb(animal: Animal) {
    console.log(animal.type);
    const type = animal.type;
    // // Luo viittauksen collectioniin jonne kontaktidokumentti lisätään.
    const ref = collection(this.firestore, `${type}`);
    // // Lisää parametrinä saadun kontaktin firestoreen contactsRef-muuttujassa
    // // olevaan collectioniin.
    return addDoc(ref, animal);
  }
}
