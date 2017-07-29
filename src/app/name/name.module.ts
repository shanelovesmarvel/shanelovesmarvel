import { NgModule } from '@angular/core';
import { MdGridListModule, MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NameHomeComponent } from './name-home.component';
import { NameCardComponent } from './name-card.component';

@NgModule({
    imports: [ CommonModule, RouterModule, MdGridListModule, MdCardModule],
    exports: [ NameHomeComponent, NameCardComponent],
    declarations: [ NameHomeComponent, NameCardComponent ],
    providers: [],
})
export class NameModule { }
