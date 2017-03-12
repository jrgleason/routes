import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'jg-other',
  template: `
    <div class='other'>
      <h2>This is the other</h2>
      <div (click)="click()">Next</div>
    </div>
  `,
})
export class OtherComponent {
  constructor(private router: Router) {
  }
  click = () => {
    console.log("Clicked")
    this.router.navigate(['/'])
  }
}
