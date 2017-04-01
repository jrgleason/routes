import {Component} from '@angular/core'
import {Router} from '@angular/router';
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
      
      <div class="button" (click)="click()">Other</div>
    </div>
  `,
})
export class ViewportComponent {
  constructor(private router: Router){
    console.log("Called");
  }
  click = () => {
    console.log("Clicked")
    this.router.navigate(['/other'])
  }
}
