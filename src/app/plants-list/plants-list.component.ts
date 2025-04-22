import {Component, OnInit} from '@angular/core';
import {Plants} from './Plants';
import {PlantCartService} from '../plant-cart.service';
import {PlantDataService} from '../plant-data.service';


@Component({
  selector: 'app-plants-list',
  standalone: false,
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss'
})
export class PlantsListComponent implements OnInit{

  plants: Plants[] = [];

  constructor(
    private cart: PlantCartService,
    private plantsDataService: PlantDataService){

  }

  ngOnInit() {
    this.plantsDataService.getAll()
      .subscribe(plants => this.plants = plants);
  }

  addToCart(plant: Plants):void{
    this.cart.addToCart(plant);
    plant.stock -= plant.quantity;
    plant.quantity=0;

  }

  maxReached(m: string): void{
      alert(m);
  }

  minReached(m: string): void{
    alert(m);
  }




}
