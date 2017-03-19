import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header.component"
import {NotFoundComponent} from "./not-found.component"
import {ContentComponent} from "./content/content.component";
import {ViewportModule} from "./viewport/viewport.module";
import {OtherModule} from "./other/other.module";
const MyRouter = [
    {
        path: "",
        redirectTo: "/viewport",
        pathMatch: "full",
    },
    {
        path: "",
        component: ContentComponent,
        children: [
            {
                path: "viewport",
                loadChildren: () => ViewportModule
            },
            {
                path: "other",
                loadChildren: () => OtherModule
            },
            {
                path: "other/:number",
                loadChildren: () => OtherModule
            },
            {
                path: "**",
                component: NotFoundComponent,
            },
            {
                path: "",
                component: HeaderComponent,
                outlet: "header"
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(MyRouter, {useHash: true})],
    exports: [RouterModule],
})
export class MyRoutingModule {
    constructor() {}
}
