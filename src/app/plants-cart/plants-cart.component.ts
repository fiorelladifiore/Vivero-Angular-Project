import { Component } from '@angular/core';
import {PlantCartService} from '../plant-cart.service';
import {Plants} from '../plants-list/Plants';
import {map, Observable, tap} from 'rxjs';

@Component({
  selector: 'app-plants-cart',
  standalone: false,

  templateUrl: './plants-cart.component.html',
  styleUrl: './plants-cart.component.scss'
})
export class PlantsCartComponent {

    cartList$: Observable<Plants[]>;
    constructor(private cart: PlantCartService) {
      this.cartList$ = cart.cartList.asObservable();
    }

  getTotal(): Observable<number> {
    return this.cartList$.pipe(
      map((items: Plants[]) =>
        items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      )
    );
  }
}
