import { Component, signal, ViewChild } from '@angular/core';
import { ToggleCartDirective } from '../core/directives/toggle-add-cart.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ToggleCartDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @ViewChild(ToggleCartDirective) toggleDirective!:ToggleCartDirective;

  counter = signal(1);

  incrementQuantity(event: Event){
    if(!event){
      console.log("Event not found")
      return
    }

    this.counter.update(atual => atual + 1);

  }

  decrementQuantity(event: Event){
    if(!event){
      console.log("Event not found")
      return
    }


    this.counter.update(atual => {
      if(atual <= 1){
        this.toggleDirective.onClick()
        return atual = 1;
      }
      return atual - 1
    });
  }
}
