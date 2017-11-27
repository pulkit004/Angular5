import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BindingComponent implements OnInit {

	userName = '';

  constructor() {
  }

  ngOnInit() {
  }

  onUpdateUsername(event) {
  	this.userName = (<HTMLInputElement>event.target).value;
  }

  onClickButton() {
  	this.userName = '';
  }

}
