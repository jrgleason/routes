import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'jg-other',
  template: `
    <div class='other'>
      <h2>This is the other</h2>
      <div>
        <input type="text" [(ngModel)]="value" />
        <div (click)="submit()">Next</div>
      </div>
      <div *ngIf="value"> The value is {{value}} </div>
      <div (click)="click()">Next</div>
    </div>
  `,
})
export class OtherComponent {
  value;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.value = params['number']
    })
  }
  submit = () => {
    console.log("Clicked")
    this.router.navigate([`/other/${this.value}`])
  }
  click = () => {
    console.log("Clicked")
    this.router.navigate(['/'])
  }
}
