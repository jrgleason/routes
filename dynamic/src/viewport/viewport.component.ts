import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit} from '@angular/core'
import {Router} from '@angular/router';
import {DynamicComponent} from "./dynamic.component";

@Component({
  selector: 'jg-viewport',
  template: `
    <div class='viewport'>
      <h2>This is the viewport</h2>
      <jg-transclude>
        <div right-side>
          <h1>Hello from the right</h1>
        </div>
        <div left-side>
          <h1>Hello from the left</h1>
        </div>
      </jg-transclude>
      <div #body></div>
      <div class="button" (click)="click()">Other</div>
    </div>
  `,
})
export class ViewportComponent implements AfterContentInit{
  @ViewChild("body", {read: ViewContainerRef}) activeComponent: ViewContainerRef;
  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver){}
  ngAfterContentInit() {
    this.loadComponent();
  }
  loadComponent = () => {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    this.activeComponent.clear();
    let componentRef = this.activeComponent.createComponent(componentFactory);
    componentRef.instance["name"] = "Jackie";
  }
  click = () => {
    console.log("Clicked");
    this.router.navigate(['/other']);
  }
}
