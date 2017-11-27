import { Component } from '@angular/core';

@Component({
	selector: 'app-binding',
	templateUrl: './binding.component.html'
})

export class BindingComponent{
	// String Interpolation
	name = 'Hello, this is me!';
	number = 10;
	address = 'Sushant Lok';
	serverName = 'Test';

	// Method
	OnAddressCreation() {
		return this.address;
	}
	//End

	allowNewServers = false;

	constructor() {
		setTimeout(() => {

		 this.allowNewServers = true;
		}, 2000);
	}

	// Event Binding
	createServerStatus = 'No Server Created';


	onCreateServer() {
			this.createServerStatus = 'Server Created' + this.serverName;
	}


	onUpdateServerName(event){

		this.serverName = (<HTMLInputElement>event.target).value;

	}
}