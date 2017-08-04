import { Component, OnInit } from '@angular/core';
import { Plays } from './plays';
import { Router } from '@angular/router';

@Component({
    selector: 'my-theater',
    template: `
    <div class="whole">
        <div class="banner" style="margin-top: 1rem;">
            <div class="img-wrapper">
                <img src="/public/img/kidtheater.jpg">
            </div>
        </div> 
        <div class="container" style="margin-top: 10rem; margin-bottom: 5rem;">
            <div class="row">
                <ng-container *ngFor="let play of plays">
                    <div class="col-md-4">
                        <div>
                            <img [src]="play.poster" style="height: 300px; width: 200px;">
                        </div>
                        <button class="btn btn-success" style="margin: 1rem;"
                            (click)="viewScript($event)">{{play?.name}}
                        </button>
                    </div>
                </ng-container>
            </div>
        </div>
    </div>
    `
})

export class TheaterComponent implements OnInit {
    constructor(private router: Router) {
    }

    plays: Array<any> = Plays;

    ngOnInit() { }

    viewScript(event) {
        let name: string = event.target.innerText;
        console.info(name);
        if (name) {
            let play: any = this.plays.find((play: any) => play.name === name);
            this.router.navigate(['/theater', play && play.sname]);
        }
    }
}