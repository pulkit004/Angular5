import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomesComponent implements OnInit {

	message = 'Hello World!';

  constructor() { }

  ngOnInit() {
  }

}
