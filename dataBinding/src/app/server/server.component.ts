import { Component } from '@angular/core';

@Component({
	
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent {

	allowNewServer = false;
	serverCreationStatus = 'No server created';
	serverName = 'Test Server';

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}


	onCreateServer() {
		return this.serverCreationStatus = "Server Created! Name is " + this.serverName;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}