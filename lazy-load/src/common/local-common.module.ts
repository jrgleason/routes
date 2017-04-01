import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {NumberComponent} from "./number.component";
@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [NumberComponent],
})
export class LocalCommonModule {}