import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, OpaqueToken} from '@angular/core';
import { Actor, Actress } from './actor';
import { IMovie, MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

@Component({
    selector: 'movielist',
    template: `
    <div class="movie-list-card">
        <h2>Welcome to the movie world!</h2>
        <p>You voted {{selectedMovie?.name}}</p>
        <ul>
            <li *ngFor="let mo of (movies)">
                <my-movie #myMovie [movie]=mo (vote)="recordVote($event)"></my-movie>
            </li>
        </ul>
    </div>
`
})

export class MovieListComponent implements OnInit {
    @ViewChildren("myMovie") myMovie: QueryList<MovieComponent>;

    private movies: Array<IMovie> = [];
    private selectedMovie: IMovie = null;
    private movieName: string = "";

    constructor(private movieSvc: MovieService) { }
    
    ngOnInit() {
        this.movieSvc.getMovies().subscribe((movies: Array<IMovie>) => {
            this.movies = movies;
        });
    }

    recordVote(event: IMovie) : void {
        this.selectedMovie = event;
        let filtered = this.myMovie.filter((mo: MovieComponent): boolean => {
            return mo.movie.name === event.name; 
        });
        filtered[0].movie.voted = !filtered[0].movie.voted;
    }
}