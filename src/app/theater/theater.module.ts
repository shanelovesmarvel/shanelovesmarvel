import { NgModule } from '@angular/core';
import { TheaterComponent } from './theater.component';
import { PlayComponent } from './play.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [TheaterComponent, PlayComponent],
    declarations: [TheaterComponent, PlayComponent],
    providers: [],
})
export class TheaterModule { }
