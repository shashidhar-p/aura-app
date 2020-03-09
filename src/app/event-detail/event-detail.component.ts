import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  data : Date = new Date();
  newData:any;
  apiUrl = 'https://aura.git.edu/api/events/';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.newData = data;
      console.log(data);
    });
  }

}
