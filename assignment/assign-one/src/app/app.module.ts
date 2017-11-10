import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WarningComponent } from './WarningAlert/warning.component';
import { SuccessComponent } from './SuccessAlert/success.component';




@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
