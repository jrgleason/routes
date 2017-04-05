import { RouterModule } from "@angular/router";
import { ViewportComponent } from "./viewport.component"
const ViewportRouter = [
    {
        path: "",
        component: ViewportComponent,

    },
];
export const ViewportRoutingModule = RouterModule.forChild(ViewportRouter);
