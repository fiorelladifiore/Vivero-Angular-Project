import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Plants} from '../plants-list/Plants';


@Component({
  selector: 'app-input-integer',
  standalone: false,

  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string>= new EventEmitter<string>();

  @Output()
  minReached: EventEmitter<string>= new EventEmitter<string>();

  upQuantity(): void{
    if(this.max>this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("se alcanzó el límite");
    }
  }

  downQuantity(): void{
    if(this.quantity>0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }else{
      this.minReached.emit("ya estás en el mínimo")
    }
  }

  checkQuantity(): void{
    if(this.quantity > this.max) {
      this.quantity = 0;
      alert("No hay suficiente stock disponible");
    }
    if(this.quantity < 0) {
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);


  }




}
