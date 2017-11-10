import { Component } from '@angular/core';


@Component({

	selector: 'app-warning',
	templateUrl: './warning.component.html',
	styles: [ `
		.warning{
			color:red;
			font-size:35px;
			font-weight: 500;
		}
	`]
})

export class WarningComponent{

}