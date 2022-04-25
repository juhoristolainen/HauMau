import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../animal';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-newanimal',
  templateUrl: './newanimal.component.html',
  styleUrls: ['./newanimal.component.css'],
})
export class NewanimalComponent implements OnInit {
  picData!: any;
  constructor(
    private storage: AngularFireStorage,
    private animalService: AnimalsService
  ) {}
  ngOnInit(): void {}

  sendPhoto(event: any) {
    this.picData = event.target.files[0];
    // console.log(this.picData);
  }

  newAnimal(f: NgForm) {
    let animal: Animal;

    const file = this.picData;
    const filepath = `animal/${f.value.type}/${file.name}`;
    const ref = this.storage.ref(filepath);
    const task = ref.put(file).then(() => {
      ref.getDownloadURL().subscribe((data) => {
        animal = { name: f.value.name, type: f.value.type, url: data };
        this.animalService.addAnimalToDb(animal);
      });
    });
  }
}
