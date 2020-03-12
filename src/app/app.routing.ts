import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components/components.component';
import {LoginComponent} from './login/login.component';
import {NucleoiconsComponent} from './components/nucleoicons/nucleoicons.component';

import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {TeamComponent} from './team/team.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {NotificationComponent} from './components/notification/notification.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},

    {path: 'index', component: ComponentsComponent},
    {path: 'nucleoicons', component: NucleoiconsComponent},
    // { path: 'examples/landing',     component: LandingComponent },
    // { path: 'examples/login',       component: LoginComponent },

    // { path: 'examples/profile',     component: ProfileComponent },
    {path: 'landing', component: HomeComponent},
    {path: 'events', component: EventsComponent},
    {path: 'team', component: TeamComponent},
    {path: 'sponsor', component: SponsorsComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'event-detail', component: EventDetailComponent},
    {path: 'user', component: UserComponent},
    {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes),

    ],
    exports: [],
})
export class AppRoutingModule {
}
