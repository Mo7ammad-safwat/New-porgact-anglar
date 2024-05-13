import { Component, ViewChild } from '@angular/core';
import { MealsComponent } from './meals/meals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lecture-4-Angular';
  meals = [
    {
      id: 1,
      name: 'Meal 1',
      description: 'Description for Meal 1',
      imageUrl: 'url-to-image-1',
    },
    {
      id: 2,
      name: 'Meal 2',
      description: 'Description for Meal 2',
      imageUrl: 'url-to-image-2',
    },
    {
      id: 3,
      name: 'Meal 3',
      description: 'Description for Meal 3',
      imageUrl: 'url-to-image-3',
    },
  ];

  @ViewChild(MealsComponent) mealsComponent!: MealsComponent;

  ngAfterViewInit() {
    // We can access mealsComponent here if needed
  }

  getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * this.meals.length);
    const description = this.meals[randomIndex].description;
    this.mealsComponent.displayMealDescription(description);
  }
}
