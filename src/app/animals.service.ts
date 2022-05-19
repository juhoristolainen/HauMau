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
  getDoc,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private firestore: Firestore, private router: Router) {}

  addAnimalToDb(animal: Animal) {
    console.log(animal);
    const type = animal.type;
    // // Luo viittauksen collectioniin jonne kontaktidokumentti lisätään.
    const ref = collection(this.firestore, `${type}`);
    // // Lisää parametrinä saadun kontaktin firestoreen contactsRef-muuttujassa
    // // olevaan collectioniin.
    return addDoc(ref, animal);
  }

  getAnimalsFromDb(animaltype: any) {
    const animalRef = collection(this.firestore, animaltype);
    // Hakee collectionista datan.
    return collectionData(animalRef, { idField: 'id' }) as Observable<Animal[]>;
  }

  async getOneAnimal(animaltype: any, id: any) {
    // const animalRef = collection(this.firestore, `${animaltype}/${id}`);
    // return collectionData(animalRef, { idField: id }) as Observable<any>;
    const docRef = doc(this.firestore, animaltype, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log(docSnap.data());
      const animal = docSnap.data();
      return animal;
    } else {
      return null;
    }
  }

  deleteAnimalFromDb(type: string, id: string) {
    deleteDoc(doc(this.firestore, type, id));
    this.router.navigate(['/animals/', type]);
  }
}
