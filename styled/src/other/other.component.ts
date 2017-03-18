import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'jg-other',
  template: `
    <div class='other'>
      <router-outlet name="main"></router-outlet>
      <div class="button" (click)="click()">Viewport</div>
    </div>
  `,
})
export class OtherComponent {
  constructor(private router: Router){}
  click = () => {
    console.log("Clicked")
    this.router.navigate(['/'])
  }
}
