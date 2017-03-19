//our root app component
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {ViewportComponent} from "./viewport.component"
import {ViewportRoutingModule} from "./viewport-routing.module"
@NgModule({
  imports: [ViewportRoutingModule],
  exports: [ViewportComponent],
  declarations: [ViewportComponent],
})
export class ViewportModule {}
