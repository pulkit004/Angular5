import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivesComponent implements OnInit {

	serverStatus = '';

	serverCreation = false;

	serverNumber = ["TestServer", "TestServer 2"];

  constructor() { }

  ngOnInit() {
  }

  onServerCreation(){
  	this.serverCreation = true;
  	this.serverNumber.push(this.serverStatus);
  }

  onServerUpdate(event) {
  	this.serverStatus = (<HTMLInputElement>event.target).value;
	}

}
