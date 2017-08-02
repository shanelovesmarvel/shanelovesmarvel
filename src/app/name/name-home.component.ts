import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'movie-home',
    template: `
     <div class="whole">
        <div class="banner" style="height: 600px;">
            <div class="img-wrapper">
                <img src="/public/img/boy.jpg">
            </div>
        </div> 
        <div class="main_a">
            <div class="main">
                <div class="main_aa">
                    <div class="img">
                        <a class="name_link" routerLink="/name/Shane">Shane</a>
                        <img class="name" src="/public/img/Whats-your-name.jpg">
                    </div>
                </div>
                <div class="main_ab" style="padding-top: 250px;">
                    <md-grid-list cols="8" rowHeight="60px">
                        <md-grid-tile *ngFor="let tile of tiles"
                            [colspan]="tile.cols"
                            [rowspan]="tile.rows"
                            [style.background]="tile.color"
                            (click)="clickTile($event)">
                            {{tile.text}}
                        </md-grid-tile>
                    </md-grid-list>
                </div>
            </div>
        </div>
    </div>                           
    `
})

export class NameHomeComponent implements OnInit {
    constructor(private router: Router) { }
    tiles = [
        { text: 'Park', cols: 1, rows: 1, color: '#00E5EE' },
        { text: 'Allen', cols: 3, rows: 1, color: '#008B45' },
        { text: 'Tommy', cols: 2, rows: 1, color: '#CD6889' },
        { text: 'Armstrong', cols: 2, rows: 1, color: '#C67171' },
        { text: 'Winston', cols: 1, rows: 2, color: '#EEC900' },
        { text: 'William', cols: 4, rows: 2, color: 'lightblue' },
        { text: 'Daniel', cols: 3, rows: 2, color: 'lightpink' },
        { text: 'Viny', cols: 1, rows: 1, color: '#DDA0DD' },
        { text: 'Carraway', cols: 1, rows: 1, color: '#CD9B9B' },
        { text: 'Kate', cols: 3, rows: 1, color: 'lightgreen' },
        { text: 'Scott', cols: 3, rows: 2, color: 'coral' },
        { text: 'Ray', cols: 3, rows: 1, color: '#FF8C00' },
        { text: 'Barry', cols: 2, rows: 1, color: '#7EC0EE' },       
        { text: 'David', cols: 3, rows: 2, color: '#7CCD7C' },    
        { text: 'Lucas', cols: 3, rows: 2, color: 'yellow' },
        { text: 'Edward', cols: 2, rows: 2, color: '#FF69B4' },    
        { text: 'Geoffrey', cols: 2, rows: 1, color: '#00CDCD' },      
        { text: 'Pierce', cols: 2, rows: 1, color: '#CD8500' },
        { text: 'Victor', cols: 4, rows: 1, color: '#008B8B' }
    ];

    ngOnInit() { }

    clickTile(event) {
        let name: string = event.target.innerText;
        if (name) {
            this.router.navigate(['/name', name]);
        }
    }
}