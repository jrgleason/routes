//our root app component
import {NgModule} from '@angular/core'
import {OtherComponent} from "./other.component"
import {OtherRoutingModule} from "./other-routing.module"
import {LocalCommonModule} from "../common/local-common.module";
@NgModule({
  imports: [OtherRoutingModule, LocalCommonModule],
  declarations: [OtherComponent],
})
export class OtherModule {
  constructor(){
    // TODO: Lets take our time
    // let total = 0;
    // for(let i = 0; i < 1000000; i++){
    //   total = i + total;
    //   console.log(total)
    // }
    console.log("done");
  }
}
