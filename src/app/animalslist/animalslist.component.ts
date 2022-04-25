import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../animal';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animalslist',
  templateUrl: './animalslist.component.html',
  styleUrls: ['./animalslist.component.css'],
})
export class AnimalslistComponent implements OnInit {
  animals!: Animal[];
  animalType!: string | null;
  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalsService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.animalType = routeParams.get('type');
    this.animalService
      .getAnimalsFromDb(this.animalType)
      .subscribe((data) => (this.animals = data));
  }
}
