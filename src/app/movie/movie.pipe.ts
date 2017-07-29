import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from './movie.component';

@Pipe({
    name: 'domesticMovies'
})

export class MoviePipe implements PipeTransform {
    transform(allMovies: Array<IMovie>): Array<IMovie> {
        return allMovies.filter((movie: IMovie) => !movie.domestic);
    }
}