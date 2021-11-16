import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubjectVariantsComponent } from './subject-variants.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SubjectVariantsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
