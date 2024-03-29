import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,



  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    SweetAlert2Module,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
