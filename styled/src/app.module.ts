//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {App} from './app.component'
import {ViewportModule} from "./viewport/viewport.module"
import {OtherModule} from "./other/other.module"
import {MyRoutingModule} from "./app-routing.module"
import {HeaderComponent} from "./header.component"
import {NotFoundComponent} from "./not-found.component"
import {ContentComponent} from "./content/content.component";
@NgModule({
  imports: [ BrowserModule, ViewportModule, OtherModule, MyRoutingModule ],
  declarations: [ App, HeaderComponent, NotFoundComponent, ContentComponent ],
  bootstrap: [ App ]
})
export class AppModule {}
