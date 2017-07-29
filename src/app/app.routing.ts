import { RouterModule, Routes } from '@angular/router';

/** modules **/
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie/movie-list.component';
import { MovieHomeComponent } from './movie/movie-home.component';
import { NameHomeComponent } from './name/name-home.component';
import { NameCardComponent } from './name/name-card.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'movie', component: MovieHomeComponent },
	{ path: 'name', component: NameHomeComponent },
	{ path: 'name/:gname', component: NameCardComponent },
	{ path: 'mymovies', component: MovieListComponent }
];

export const routing = RouterModule.forRoot(routes);
