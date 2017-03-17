import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {OtherComponent} from "./other.component"
const OtherRouter = [
    {
        path: "other",
        component: OtherComponent,
    },
    {
        path: "other/:number",
        component: OtherComponent,
    }
];
@NgModule({
    imports: [RouterModule.forChild(OtherRouter)],
    exports: [RouterModule],
})
export class OtherRoutingModule {
    constructor() {}
}
