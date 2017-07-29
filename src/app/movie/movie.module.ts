import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list.component';
import { MovieHomeComponent } from './movie-home.component';
import { HighlightDirective } from './highlight.directive';
import { MoviePipe } from './movie.pipe';
import { MovieService } from './movie.service';

@NgModule({
    imports: [ CommonModule,  FormsModule],
    exports: [ MovieComponent, MovieListComponent, MovieHomeComponent],
    declarations: [ MovieComponent, MovieListComponent, MovieHomeComponent, HighlightDirective, MoviePipe ],
    providers: [MovieService],
})
export class MovieModule { }
