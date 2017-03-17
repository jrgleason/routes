//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {App} from './app.component'
import { ViewportComponent } from "./viewport.component"
import { OtherComponent } from "./other.component"
import {MyRoutingModule} from "./app-routing.module"
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports: [ BrowserModule, MyRoutingModule, FormsModule ],
  declarations: [App, ViewportComponent, OtherComponent],
  bootstrap: [ App ]
})
export class AppModule {}
