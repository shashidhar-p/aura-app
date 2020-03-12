import {Component, Input, OnInit} from '@angular/core';
import * as Rellax from 'rellax';
import {IAlert} from '../components/notification/notification.component';
import {AuthenticationService} from '../_services';
import {User} from '../_models';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    data: Date = new Date();
    focus;
    focus1;
    jsonstringify = JSON.stringify;
    currentUser: User;
    constructor(
        public authenticationService: AuthenticationService,
    ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }


}

