import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { RecipeBook } from '../recipe-book.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeDetailComponent implements OnInit {

	@Input() recipe: RecipeBook;

  constructor() { }

  ngOnInit() {
  }

}
