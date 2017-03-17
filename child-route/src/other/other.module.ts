//our root app component
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {OtherComponent} from "./other.component"
import {OtherRoutingModule} from "./other-routing.module"
import {FormsModule}   from '@angular/forms';
@NgModule({
  imports: [OtherRoutingModule, FormsModule, CommonModule],
  exports: [OtherComponent],
  declarations: [OtherComponent],
})
export class OtherModule {}
