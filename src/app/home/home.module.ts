import { NgModule } from '@angular/core';
import { SharedModule } from '../commons/shared.module';
import { MovieModule } from '../movie/movie.module';

import { HomeComponent } from './home.component';
import { NgbdModalContentComponent } from '../components/services/modals/hellohome/hellohome.modal.component';

@NgModule({
	imports: [
		SharedModule,
		MovieModule
	],
	declarations: [
		NgbdModalContentComponent,
		HomeComponent
	],
	providers: [],
	entryComponents: [
		NgbdModalContentComponent
	],
})

export class HomeModule {}
