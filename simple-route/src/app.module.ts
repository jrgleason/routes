//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {App} from './app.component'
import { ViewportComponent } from "./viewport.component"
import { OtherComponent } from "./other.component"
import {MyRoutingModule} from "./app-routing.module"
@NgModule({
  imports: [ BrowserModule, MyRoutingModule ],
  declarations: [App, ViewportComponent, OtherComponent],
  bootstrap: [ App ]
})
export class AppModule {}
