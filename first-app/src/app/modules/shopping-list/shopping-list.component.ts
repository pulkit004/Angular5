import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

	ingredients: Ingredient[] = [

		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)

	];

  constructor() { }

  ngOnInit() {
  }

}
