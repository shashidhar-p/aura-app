import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
    apiUrl = 'https://aura.git.edu/api/events/clubWiseList';
    newData: any;
    coords: any;
    objectkeys = Object.keys;
    jsonparse = JSON.parse;
    responseData = {};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get(this.apiUrl).subscribe((data) => {
            this.newData = data;
            // for (var i=0; i<this.newData.length; i++) {
            //   this.responseData[this.newData[i].id] = JSON.parse(this.newData[i].coords);
            //   for (var j=0; j<this.responseData[this.newData[i].id].length; j++) {
            //     var temp = this.responseData[this.newData[i].id][j].Contact;
            //     console.log(temp);
            //     // this.http.get('https://aura.git.edu/api/coords/byPh/' + temp).subscribe(res => {
            //     //   console.log(res);
            //     //
            //     // })
            //   }
            //   // const source = from(this.responseData[this.newData[i].id]);
            //   // const example = source.pipe(map(({Contact}) => Contact));
            //   // const subscribe = example.subscribe(val => {console.log("ph:"+val)});
            // }
        });
    }

    public getCoord(coord) {

        // this.coords = JSON.parse(coord);
        // const source = from(this.coords);
        // const example = source.pipe(map(({Contact}) => Contact));
        // const subscribe = example.subscribe(val => {
        //         console.log('ph:' + val);
        //         this.http.get('https://aura.git.edu/api/coords/byPh/' + val).subscribe(res => {
        //             console.log(res);
        //         })
        //     }
        // );


    }


}
