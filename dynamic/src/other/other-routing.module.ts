import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {NumberComponent} from "../common/number.component"
import {OtherComponent} from "./other.component"
const OtherRouter = [
    {
        path: "",
        component: OtherComponent,
        children: [
          {
            path: "",
            component: NumberComponent,
            outlet: "main",
          }
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(OtherRouter)],
})
export class OtherRoutingModule {
    constructor() {}
}
