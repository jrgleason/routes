import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import {HeaderComponent} from "./header.component"
import {NotFoundComponent} from "./not-found.component"
import {ContentComponent} from "./content/content.component";
import {ViewportModule} from "./viewport/viewport.module";
import {OtherModule} from "./other/other.module";
import {CanActivateIfChance} from "./common/simple.guard";
import {InvalidComponent} from "./invalid.component";
const MyRouter = [
    {
        path: "",
        component: ContentComponent,
        children: [
            {
                path: "viewport",
                loadChildren: () => ViewportModule,
                canActivate: [CanActivateIfChance]
            },
            {
                path: "other",
                loadChildren: () => OtherModule,
                canActivate: [CanActivateIfChance]
            },
            {
                path: "other/:number",
                loadChildren: () => OtherModule,
                canActivate: [CanActivateIfChance]
            },
            {
                path: "",
                component: HeaderComponent,
                outlet: "header"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/viewport",
        pathMatch: "full",
    },
    {
        path: "invalid",
        component: ContentComponent,
        children: [
            {
                path: "",
                component: InvalidComponent,
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
    },
];
@NgModule({
    imports: [RouterModule.forRoot(MyRouter, {useHash: true})],
    exports: [RouterModule],
})
export class MyRoutingModule {
    constructor() {}
}
