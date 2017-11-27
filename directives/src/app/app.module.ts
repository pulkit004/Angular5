import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
