import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ViewportComponent } from "./viewport.component"
import { OtherComponent } from "./other.component"
const MyRouter = [
    {
        path: "",
        component: ViewportComponent,
    },
    {
        path: "other",
        component: OtherComponent,
    },
];
@NgModule({
    imports: [RouterModule.forRoot(MyRouter)],
    exports: [RouterModule],
})
export class MyRoutingModule {
    constructor() {}
}
