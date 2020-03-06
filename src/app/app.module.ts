import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigicompComponent } from './digicomp/digicomp.component';
import { DigiservService } from './digiserv.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigicompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DigiservService],
  bootstrap: [AppComponent]
})
export class AppModule { }