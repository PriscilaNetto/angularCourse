import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgswitchComponent } from './directive-ngswitch/directive-ngswitch.component';
import { DirectivesNgforComponent } from './directives-ngfor/directives-ngfor.component';
import { DirectivesNgClassComponent } from './directives-ng-class/directives-ng-class.component';
import { DirectiveNgstyleComponent } from './directive-ngstyle/directive-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgswitchComponent,
    DirectivesNgforComponent,
    DirectivesNgClassComponent,
    DirectiveNgstyleComponent,
    OperadorElvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
