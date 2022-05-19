import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singleanimal',
  templateUrl: './singleanimal.component.html',
  styleUrls: ['./singleanimal.component.css'],
})
export class SingleanimalComponent implements OnInit {
  animal!: Animal | any;
  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const type = routeParams.get('type');
    const id = routeParams.get('id');
    this.animalService
      .getOneAnimal(type, id)
      .then((data) => (this.animal = data));
  }

  deleteAnimal() {
    const routeParams = this.route.snapshot.paramMap;
    const type = routeParams.get('type');
    const id = routeParams.get('id');
    this.animalService.deleteAnimalFromDb(type!, id!);
  }
}
