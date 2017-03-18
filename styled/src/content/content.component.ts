import {Component} from '@angular/core';
@Component({
    selector: 'jg-content',
    template: `
      <div class="content" fxLayout="column">
        <router-outlet name="header"></router-outlet>
        <div class="body" fxFlex>
          <router-outlet></router-outlet>
        </div>
      </div>
    `,
    styles: [ require("./content.styles") ],
})
export class ContentComponent {
}