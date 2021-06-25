import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormComponent } from './meu-form/meu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    MeuFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  exports: [MeuFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
