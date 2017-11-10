import { Component } from '@angular/core';

@Component({

	selector: '[app-success]',
	template: `
		<p class="success">We have made it. Success!!</p>
	`,
	styles: [

		`.success{
			color: green;
			font-size: 45px;
			font-weight: 500;
				
		}
	`]
})

export class SuccessComponent{
	
}