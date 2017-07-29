import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../components/auth/auth.service';
import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';
import { StoreService } from '../../components/storage/store.service';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    providers: [ AuthService ]
})

export class HeaderComponent implements OnInit {
    logged: Boolean;
    translateService: TranslateService;
    private languages: Array<string>;
    
    constructor(
        translate: TranslateService,
        private store: StoreService,
        private authHttp: AuthHttp,
        private router: Router,
        private authService: AuthService) {

        this.languages = translate.getLangs();
        this.translateService = translate;
    }

    ngOnInit() {
        this.logged = this.authService.loggedIn();
        console.log('loggued => ', this.logged);
    }

    logout() {
        // this.authHttp.get('/api/sessions/logout') ...
        this.store.del('token');
        this.store.del('profile');
        this.logged = false;
        this.router.navigate(['login']);
    }
}
