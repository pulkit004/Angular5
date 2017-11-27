import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<RecipeBook>();

	//To declare the array of the recipe list
	recipes: RecipeBook[] =  [

		new RecipeBook('A Test Recipe', 'A description of the recipe', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg'),
		new RecipeBook('A Test Recipe', 'A description of the recipe', 'http://www.sdsmasala.com/wp-content/uploads/2016/12/shahi-paneer.jpg')


	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: RecipeBook){
    this.recipeWasSelected.emit(recipe);

  }
}
