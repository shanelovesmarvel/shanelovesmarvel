import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor, Actress } from './actor';

@Component({
    selector: 'my-movie',
    template: `
        <div class="movie-table-card">
            <ul *ngIf="movie">
                <li>{{movie?.name}}</li>
                <li [style.color]="movie.domestic ? 'blue': 'green'">Date: {{movie?.date | date:'mediumDate'}}</li>
                <li>Director: {{movie?.director}}</li>
                <li [ngSwitch]="movie?.type">
                    <span *ngSwitchCase="'Action'" style="color: pink;">Type: {{movie.type}}</span>
                    <span *ngSwitchCase="'Comedy'" style="color: orange;">Type: {{movie.type}}</span>
                    <span *ngSwitchCase="'Drama'" style="color: red;">Type: {{movie.type}}</span>
                    <span *ngSwitchDefault style="color: grey;">Type: {{movie.type}}</span>
                <li>
                <div style="height: 60px" class="movie-card-starring" highlightStar>starring: <br>
                    <div *ngFor="let actor of movie?.starring">{{actor?.name}} - {{actor?.nationality}}</div><br>
                </div>
                <li>
                    <button [ngClass]="movie.voted ? 'btn btn-success': 'btn btn-warning'" (click)="voteMovie($event)">Vote</button>
                </li>
            </ul>
        </div>             
    `
})

export class MovieComponent implements OnInit {
    @Input() movie: IMovie = null;
    @Output() vote: EventEmitter<IMovie> = new EventEmitter();
        
    constructor() { }

    ngOnInit() { }

    voteMovie(event: MouseEvent): void {
        event.stopPropagation();
        this.vote.emit(this.movie);
    }
}

export interface IMovie {
    name: string;
    date: Date;
    type: string;
    director: string;
    starring: Array<Actor| Actress> ;
    domestic: boolean;
    voted: boolean;
}