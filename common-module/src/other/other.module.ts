//our root app component
import {NgModule} from '@angular/core'
import {OtherComponent} from "./other.component"
import {OtherRoutingModule} from "./other-routing.module"
@NgModule({
  imports: [OtherRoutingModule],
  declarations: [OtherComponent],
})
export class OtherModule {}
