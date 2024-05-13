import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent {
  @Input() meals: any[] = [];

  displayMealDescription(description: string): void {
    alert(description);
  }
}
