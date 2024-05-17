import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-selector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './restaurant-selector.component.html',
  styleUrl: './restaurant-selector.component.css'
})
export class RestaurantSelectorComponent {
  @Input() restaurants: any[] = [];
  @Output() restaurantSelected = new EventEmitter<any>();

  selectRestaurant(restaurant: any) {
    this.restaurantSelected.emit(restaurant);
  }
}
