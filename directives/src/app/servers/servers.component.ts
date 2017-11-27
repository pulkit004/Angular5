import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  

  serverLive = 'offline';

  constructor() {

  	this.serverLive = Math.random() > 0.5 ? 'online' : 'offline'; 

   }

   getServerLive() {
   	return this.serverLive;
   }  

  ngOnInit() {
  }


  //If else notation

  getColor() {

  	return this.serverLive === 'online' ? 'green' : 'red';

  }


}
