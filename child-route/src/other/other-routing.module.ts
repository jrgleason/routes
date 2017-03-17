import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {NumberComponent} from "./number.component"
import {OtherComponent} from "./other.component"
const OtherRouter = [
    {
        path: "other",
        component: OtherComponent,
        children: [
          {
            path: "",
            component: NumberComponent,
            outlet: "main",
          },
        ],
    },
    {
        path: "other/:number",
        component: OtherComponent,
        // TODO: Look into this dupication
        children: [
          {
            path: "",
            component: NumberComponent,
            outlet: "main",
          },
        ],
    }
];
@NgModule({
    imports: [RouterModule.forChild(OtherRouter)],
    exports: [RouterModule],
})
export class OtherRoutingModule {
    constructor() {}
}
