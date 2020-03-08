import {Component, OnInit, ElementRef, Input} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {IAlert} from '../../components/notification/notification.component';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;
    public isNotifs:boolean=false;
    data: any;
    apiUrl = 'http://aura.git.edu/api/notifs';

    constructor(public location: Location, private element: ElementRef, public http: HttpClient) {
        this.sidebarVisible = false;

    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.fetchNotif();
        console.log(this.data);
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        } else {
            return false;
        }
    };
    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    public fetchNotif() {
        const data = this.http.get<any>(this.apiUrl).subscribe((data) => {
            if(data.length)
            {
                this.isNotifs=true;
            }
            for (let i = data.length - 1; i >= 0; i--) {
                var inputType;

                if (data[i].type === 'eventChange') {
                    inputType = 'danger';
                }
                if (data[i].type === 'announcement') {
                    inputType = 'info';
                }
                if (data[i].type === 'ruleBookUpdate') {
                    inputType = 'warning';
                }
                if (data[i].type === 'reminder') {
                    inputType = 'success';
                }
                this.alerts.push({
                    id: data[i].id,
                    type: inputType,
                    strong: data[i].title,
                    message: data[i].description,
                    icon: 'ui-2_like'

                });
            }
            // this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
        });
    }
}

export interface IAlert {
    id: number;
    type: string;
    strong?: string;
    message: string;
    icon?: string;
}
