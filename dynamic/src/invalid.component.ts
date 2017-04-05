import {Component} from '@angular/core'
@Component({
    selector: 'my-invalid',
    template: `
    <div class="app">
      <h1> invalid user </h1>
      <a routerLink="/viewport">Try Again</a>
    </div>
  `,
})
export class InvalidComponent {
}