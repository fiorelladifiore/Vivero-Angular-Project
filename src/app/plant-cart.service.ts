import { Injectable } from '@angular/core';
import {Plants} from './plants-list/Plants';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantCartService {

  private _cartList: Plants[] = [];

  cartList: BehaviorSubject<Plants[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(plant: Plants):void {
    let item= this._cartList.find((v1) => v1.name == plant.name);
    if(!item) {
      this._cartList.push({...plant});
    }else{
      item.quantity += plant.quantity;
    }
    this.cartList.next(this._cartList);

  }
}

