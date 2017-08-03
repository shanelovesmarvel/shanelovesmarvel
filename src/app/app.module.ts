import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { FormsModule } from '@angular/forms';

/** PROVIDERS **/
import { AuthGuard } from './components/auth/auth-guard.service';
import { AuthService } from './components/auth/auth.service';
import { HttpFallback } from './components/http/http.fallback.service';
import { StoreService } from './components/storage/store.service';

/*** MODULES ***/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { SharedModule } from './commons/shared.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MovieModule } from './movie/movie.module';
import { NameModule } from './name/name.module';
import { MortageModule } from './mortage/mortage.module';
import { TheaterModule } from './theater/theater.module';
import { AuthModule } from './components/auth/auth.module';

/**COMPONENTS */
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';

/** SCSS APP **/
require('./app.module.scss');

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
	    NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/locales', '.json'),
            deps: [Http]
        }),
        routing,
        SharedModule,
        AuthModule,
	    HomeModule,
	    LoginModule,
        MovieModule,
        NameModule,
        MortageModule,
        TheaterModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        StoreService,
        HttpFallback
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
