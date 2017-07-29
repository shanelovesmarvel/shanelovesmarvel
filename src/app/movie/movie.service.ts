import { Injectable } from '@angular/core';
import { Actor, Actress } from './actor';
import { IMovie } from './movie.component';
import { Observable } from 'rxjs';


@Injectable()
export class MovieService {

    constructor() { }

    public getMovies(): Observable<any> {
        return Observable.of([
            {
                name: "爱乐之城",
                date: new Date("09/15/2016"),
                type: "Dance&Musical",
                director: "Damien Chazelle",
                starring: [
                    new Actor("Ryan Gosling", "Canadian"),
                    new Actress("Emma Stone", "American")
                ],
                domestic: false
            },
            {
                name: "湄公河行动",
                date: new Date("10/01/2016"),
                type: "Drama",
                director: "林超贤",
                starring: [
                    new Actor("张涵予", "中国"),
                    new Actress("彭于晏", "中国")
                ],
                domestic: true
            },
            {
                name: "银河护卫队2",
                date: new Date("05/05/2017"),
                type: "Comedy",
                director: "James Gunn",
                starring: [
                    new Actor("Chirs Pratt", "American"),
                    new Actress("Zoe Saldana", "American")
                ],
                domestic: false
            },
            {
                name: "蜘蛛侠：返校季",
                date: new Date("07/07/2017"),
                type: "Action",
                director: "Jon Watts",
                starring: [
                    new Actor("Tom Holand", "British"),
                    new Actor("Iron Man", "American")
                ],
                domestic: false
            },
            {
                name: "记忆大师",
                date: new Date("04/28/2017"),
                type: "Thriller",
                director: "陈正道",
                starring: [
                    new Actor("黄渤", "中国"),
                    new Actress("徐静蕾", "中国")
                ],
                domestic: true
            },
        ]);
    }
}