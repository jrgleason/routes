//our root app component
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {ViewportComponent} from "./viewport.component"
import {ViewportRoutingModule} from "./viewport-routing.module"
import {TranscludeComponent} from "./trans.component";
import {DynamicComponent} from "./dynamic.component";
@NgModule({
  imports: [ViewportRoutingModule],
  exports: [ViewportComponent],
  declarations: [ViewportComponent, TranscludeComponent, DynamicComponent],
  entryComponents: [DynamicComponent]
})
export class ViewportModule {

}
