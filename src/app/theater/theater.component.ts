import { Component, OnInit } from '@angular/core';
import { Plays } from './plays';
import { Router } from '@angular/router';

@Component({
    selector: 'my-theater',
    template: `
    <div class="whole">
        <div class="banner" style="height: 600px;">
            <div class="img-wrapper">
                <img src="/public/img/4.jpg">
            </div>
        </div> 
        <div class="container">
            <div class="row" >
                <div class="col-md-4 col-sm-6" *ngFor="let play of plays">
                    <div>
                        <img src="/public/img/01.png" width="200px">
                    </div>
                    <button class="btn btn-default" (click)="viewScript($event)"><span class="glyphicon glyphicon-film"></span><strong>{{play.name}}</strong></button>
                </div>
            </div>
        </div>
    </div>
    `
})

export class TheaterComponent implements OnInit {
    constructor(private router: Router) { 
    }

    plays: Array<any>= Plays;

    ngOnInit() { }

    viewScript(event){
        let name: string = event.target.innerText;
        if (name) {
            this.router.navigate(['/theater', name]);
        }
    }
}