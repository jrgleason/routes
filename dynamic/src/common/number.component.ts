import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'jg-number',
  template: `
    <div class='number'>
      <div>
        <input type="text" [(ngModel)]="value" />
      </div>
      <div *ngIf="value"> The value is {{value}} </div>
    </div>
  `,
})
export class NumberComponent {
  value;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.value = params['number']
    )
  }
}
