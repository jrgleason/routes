import {Component} from '@angular/core'
@Component({
    selector: 'jg-transclude',
    template: `
    <div style="display:'flex';">
        <ng-content select="[left-side]"></ng-content>
        <ng-content select="[right-side]"></ng-content>
    </div>
  `,
})
export class TranscludeComponent {

}
