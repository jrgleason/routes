import {Component, Input} from '@angular/core'
@Component({
    selector: 'jg-dynamic',
    template: `
    <div style="display:'flex';">
      <div>Dynamic {{name}}</div>
    </div>
  `,
})
export class DynamicComponent {
    @Input() name:string
}