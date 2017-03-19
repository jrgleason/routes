//our root app component
import {NgModule} from '@angular/core'
import {OtherComponent} from "./other.component"
import {OtherRoutingModule} from "./other-routing.module"
import {LocalCommonModule} from "../common/local-common.module";
@NgModule({
  imports: [OtherRoutingModule, LocalCommonModule],
  declarations: [OtherComponent],
})
export class OtherModule {}
