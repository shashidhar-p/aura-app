import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {TeamComponent} from './team/team.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {LoginComponent} from './login/login.component';

// used to create fake backend
import {ErrorInterceptor, JwtInterceptor} from './_helpers';



import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        EventsComponent,
        EventDetailComponent,
        TeamComponent,
        SponsorsComponent,
        UserComponent,
        LoginComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
