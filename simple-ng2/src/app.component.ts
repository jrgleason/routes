import {Component} from '@angular/core'
@Component({
  selector: 'my-app',
  template: `
    <div>
      <h1>Hello {{name}}</h1> 
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = 'Angular2'
  }
}
