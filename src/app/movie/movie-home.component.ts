import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'movie-home',
    template: `
     <div class="whole">
        <div class="banner">
            <ul class="cb-slideshow">
                <li><span></span></li>
                <li><span></span></li> 
                <li><span></span></li> 
                <li><span></span></li> 
                <li><span></span></li> 
                <li><span></span></li> 
            </ul>
        </div> 
        <div class="main_a">
            <div class="main">
                <div class="main_aa">
                    <div class="img">
                        <img class="film" src="/public/img/01.png">
                    </div>
                    <div class="text a">
                        <p>A movie is</p>
                        <span id="span1">or should be - more like music than like fiction.</span><br>
                        <span id="span2">It should be a progression of moods and feelings. </span><br>
                        <span id="span3">The theme, what's behind the emotion, the meaning, all that comes later.</span>
                    </div>
                </div>
                <div class="main_ab">
                    <div class="main_ab_ul">
                        <div class="main_ab_li">
                            <a href="javascript:void(0);" (click)="checkMovie($event)" title="Movies">
                                <img class="menuitem" src="/public/img/11.png">
                            </a>
                            <div class="text">
                                <p>View Recorded Movies.</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_ab_ul">
                        <div class="main_ab_li">
                            <a href="javascript:void(0);" (click)="checkFav($event)" title="Favourites">
                                <img class="menuitem" src="/public/img/10.png">
                            </a>
                            <div class="text">
                                <p>View Favourite Movies.</p>
                            </div>
                        </div>
                    </div>
                    <div class="main_ab_ul">
                        <div class="main_ab_li">
                            <a href="javascript:void(0);" (click)="checkCharts($event)" title="Charts">
                                <img class="menuitem" src="/public/img/13.png">
                            </a>
                            <div class="text">
                                <p>View Statistical Charts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                           
    `
})

export class MovieHomeComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    checkMovie(): void {
        this.router.navigateByUrl('/mymovies');
    }

    checkFav(): void {
        console.info("check favourite movies...");
    }

    checkCharts(): void {
        console.info("check charts...");
    }
}