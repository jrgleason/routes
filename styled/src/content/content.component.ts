import {Component} from '@angular/core';
@Component({
    selector: 'jg-content',
    template: `
    <div class="content">
      <router-outlet name="header"></router-outlet>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class ContentComponent {
}