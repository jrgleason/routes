import {RouterModule} from "@angular/router";
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
export const OtherRoutingModule = RouterModule.forChild(OtherRouter);