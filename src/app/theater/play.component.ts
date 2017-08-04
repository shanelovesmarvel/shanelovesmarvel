import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Plays } from './plays';

@Component({
    selector: 'my-play',
    template: `
    <div class="container">
        <div *ngFor="let line of lines" style="padding: 0.5rem;">
            <span [class]="speakers[line.speaker]">{{line.speaker}} : {{line.speakContent}}</span>
        </div>
    </div>
    `
})

export class PlayComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute) { }

    currPlay: string = '';
    lines: Array<any> = [];
    speakers: object = {};
    

    ngOnInit() { 
        this.route.params.subscribe((params: any) => {
            let sname: string = params["sname"];
            if (sname) {
                let play: any = Plays.find((play: any) => play.sname === sname);
                this.currPlay = play && play.content;
            }
            let rows = this.currPlay.split("\n");

            rows.forEach(row => {
                let arr = row.split(":");
                let speaker = arr[0];
                let speakContent = arr[1];
                this.lines.push({"speaker":speaker, "speakContent": speakContent});
                this.speakers[speaker]=true;
            });
            let i=0;
            let styles: Array<any> = ['text-primary','text-success','text-warning','text-danger'];
            for(let key in this.speakers){
                this.speakers[key] = styles[i++];
            }
        });
    }
}