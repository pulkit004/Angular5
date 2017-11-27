import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { RecipeBook } from './recipe-book.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeBookComponent implements OnInit {

	selectedRecipe: RecipeBook;


  constructor() { }

  ngOnInit() {
  }

}
