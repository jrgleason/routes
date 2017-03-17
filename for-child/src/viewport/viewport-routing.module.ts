import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ViewportComponent } from "./viewport.component"
const ViewportRouter = [

    {
        path: "viewport",
        component: ViewportComponent,
    },
];
@NgModule({
    imports: [RouterModule.forChild(ViewportRouter)],
    exports: [RouterModule],
})
export class ViewportRoutingModule {
    constructor() {}
}
