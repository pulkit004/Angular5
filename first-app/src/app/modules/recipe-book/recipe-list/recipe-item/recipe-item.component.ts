import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

import { RecipeBook } from '../../recipe-book.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: RecipeBook;

	@Output() recipeSelected = new EventEmitter<void>();



  constructor() { }

  ngOnInit() {
  }

  onSelected() {
  	this.recipeSelected.emit();
  }

}
