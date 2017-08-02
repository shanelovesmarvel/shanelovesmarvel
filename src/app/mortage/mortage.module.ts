import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { MortageHomeComponent } from './mortage-home.component';

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule],
    exports: [ MortageHomeComponent ],
    declarations: [ MortageHomeComponent ],
    providers: [],
})
export class MortageModule { }
