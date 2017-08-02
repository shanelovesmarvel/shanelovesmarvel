import { Component, OnInit, ViewChild, ViewChildren, QueryList, Inject, OpaqueToken } from '@angular/core';
import { Actor, Actress } from './actor';
import { IMovie, MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

@Component({
    selector: 'movielist',
    template: `
    <div class="movie-list-card">
        <h2>Welcome to the movie world!</h2>
        <ng-container *ngFor="let selectedMovie of selectedMovies">
            <p>You voted {{selectedMovie?.name}}</p>
        </ng-container>
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
    private selectedMovies: IMovie[] = [];
    private movieName: string = "";

    constructor(private movieSvc: MovieService) { }

    ngOnInit() {
        this.movieSvc.getMovies().subscribe((movies: Array<IMovie>) => {
            this.movies = movies;
        });
    }

    recordVote(event: IMovie): void {
        let filtered = this.myMovie.filter((mo: MovieComponent): boolean => {
            return mo.movie.name === event.name;
        });
        let index: number = this.selectedMovies.findIndex((movie: IMovie) => movie.name.toLowerCase() === event.name.toLowerCase());

        if (filtered[0].movie.voted) {
            if (index !== -1) {
                this.selectedMovies.splice(index, 1);
            }
        } else {
            if (index === -1) {
                this.selectedMovies.push(event);
            }
        }
        filtered[0].movie.voted = !filtered[0].movie.voted;
    }
}