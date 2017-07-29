import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Names } from './names';

@Component({
    selector: 'name_card',
    template: `
    <md-card class="name-card">
        <md-card-header>
            <md-card-title style="color: #008B8B;font-size: 2em;">Given Name: {{currName?.gname}}</md-card-title>
            <md-card-subtitle style="color: #00CDCD; font-size: 1.2em;" *ngIf="currName?.gender">Gender:  {{currName?.gender}}</md-card-subtitle>
            <md-card-subtitle style="color: #CD6889; font-size: 1.5em" *ngIf="currName?.usage">Usage: {{currName?.usage}} </md-card-subtitle>
            <md-card-subtitle style="color: coral; font-size: 1.2em;" *ngIf="currName?.pronounced">Pronounced: {{currName?.pronounced}} </md-card-subtitle>
        </md-card-header>
        <md-card-content>
            <md-card-subtitle style="color: #1874CD; font-size: 1.5em">Meaning & History: </md-card-subtitle>
            <ng-container *ngFor="let title of currName?.meaning?.titles">
                <p style="color: #1874CD; font-size: 1.5em">{{title}}</p>
            </ng-container> 
            <ng-container *ngFor="let img of currName?.meaning?.imgs">
                <img md-card-image class="card-img" [src]="img">
            </ng-container>
            <md-card-subtitle style="color: #CD2626; font-size: 1.5em" *ngIf="currName?.popularity">Popularity: </md-card-subtitle>
            <ng-container *ngFor="let img of currName?.popularity">
                <img md-card-image class="pop-img" [src]="img">
            </ng-container>
            <md-card-subtitle style="color: #FF6347; font-size: 1.5em" *ngIf="currName?.variants">Variants(变体): {{currName?.variants}}</md-card-subtitle>
            <md-card-subtitle style="color: #FF6347; font-size: 1.5em" *ngIf="currName?.diminutives">Diminutives(昵称): {{currName?.diminutives}} </md-card-subtitle>
            <md-card-subtitle style="color: #006400;font-size: 1.8em;">Namesakes(同名的人): </md-card-subtitle>
            <ng-container *ngFor="let name of currName?.namesakes?.titles">
                <md-card-subtitle style="color: #2F4F4F;font-size: 1.5em;">{{name}}</md-card-subtitle>
            </ng-container>
            <ng-container *ngFor="let img of currName?.namesakes?.imgs">
                <img md-card-image [src]="img">
            </ng-container>
        </md-card-content>
    </md-card>
    `
})

export class NameCardComponent implements OnInit {
    currName: any = null;
    constructor(
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params: any) => {
            let name: string = params["gname"];
            if (name) {
                this.currName = Names[name];
            }
        });
    }
}