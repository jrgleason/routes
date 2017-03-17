//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {App} from './app.component'
import {ViewportModule} from "./viewport/viewport.module"
import {OtherModule} from "./other/other.module"
import {MyRoutingModule} from "./app-routing.module"
@NgModule({
  imports: [ BrowserModule, MyRoutingModule, ViewportModule, OtherModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
