import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
const MyRouter = [
    {
        path: "",
        redirectTo: "/viewport",
        pathMatch: "full",
    }
];
@NgModule({
    imports: [RouterModule.forRoot(MyRouter)],
    exports: [RouterModule],
})
export class MyRoutingModule {
    constructor() {}
}
