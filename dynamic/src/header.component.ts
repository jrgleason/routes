import {Component} from '@angular/core'
import {Router} from '@angular/router';
@Component({
  selector: 'jg-header',
  template: `
    <div class='header'>
      <h1> This is the header </h1>
    </div>
  `,
  styles: [ require("./header.styles") ],
})
export class HeaderComponent {
  constructor(){
  }
}
