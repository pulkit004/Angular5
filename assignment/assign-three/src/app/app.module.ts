import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { CountComponent } from './count/count.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
