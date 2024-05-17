import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import restaruantsList from '../../assets/restaurants.json'
import { RestaurantSelectorComponent } from '../restaurant-selector/restaurant-selector.component';
@Component({
  selector: 'app-http-component',
  standalone: true,
  imports: [JsonPipe , NgIf , HttpClientModule , RestaurantSelectorComponent],
  templateUrl: './http-component.component.html',
  styleUrl: './http-component.component.css'
})
export class HttpComponentComponent implements OnInit {
  data: any;
  restaurants: any[] = [];
  selectedRestaurant: any = null;
  menu: any = null;
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.restaurants = restaruantsList
  }
  onRestaurantSelected(restaurant: any) {
    this.selectedRestaurant = restaurant;
    this.fetchMenu(restaurant.url_menucat);
  }

  fetchMenu(url: string) {
    this.dataService.getMenu(url).subscribe(
      (response) => this.menu = response,
      (error) => console.error('Error fetching menu:', error)
    );
  }
  
}
