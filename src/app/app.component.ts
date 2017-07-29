import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html'
})

export class AppComponent {
	title: string;

	constructor(translate: TranslateService) {
		translate.setDefaultLang('fr');
		translate.use('en');
	}
}


