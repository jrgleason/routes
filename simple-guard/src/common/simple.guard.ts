import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Router } from "@angular/router";
@Injectable()
export class CanActivateIfChance implements CanActivate {
    constructor(private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ) {
        let val = (Math.random() * 100) > 50;
        if(val){
            return true;
        }
        else{
            this.router.navigate(["/invalid"]);
        }
    }
}