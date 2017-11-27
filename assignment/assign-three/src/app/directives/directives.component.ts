import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivesComponent implements OnInit {

	toggleBool = true;
	displayNumber = [];



	onToggleButton() {
		this.toggleBool = !this.toggleBool;
		// this.displayNumber.push(this.displayNumber.length + 1);
		this.displayNumber.push(new Date());
	}
  constructor() { 

  }

  ngOnInit() {
  }

}
