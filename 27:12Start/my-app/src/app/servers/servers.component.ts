import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Property binding
  allowNewServers = false;

  serverCreationStatus = 'Server is not created';

  serverName = 'TestServer';

  serverCreated = false;

  servers = ['Testserver', 'TestServers 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
   }

   onCreateServerStatus() {
     this.serverCreated = true;
     this.servers.push(this.serverName);
     this.serverCreationStatus = 'Server is Created. Name is ' + this.serverName;
   }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


  ngOnInit() {
  }

}
