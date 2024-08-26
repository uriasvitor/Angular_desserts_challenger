import { Component } from '@angular/core';
import { ToggleCartDirective } from '../core/directives/toggle-add-cart.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ToggleCartDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
