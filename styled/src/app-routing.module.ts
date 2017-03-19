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
        component: ContentComponent,
        children: [
            {
                path: "",
                loadChildren: () => ViewportModule
            },
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
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(MyRouter, {useHash: true})],
    exports: [RouterModule],
})
export class MyRoutingModule {
    constructor() {}
}
