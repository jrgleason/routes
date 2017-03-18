import {Component} from '@angular/core'
@Component({
  selector: 'my-app',
  template: `
    <div class="app">
      <h1> Address not found </h1>
    </div>
  `,
})
export class NotFoundComponent {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}
