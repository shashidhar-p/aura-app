import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  data : Date = new Date();
  newData:any;
  coords: any;
  coordsLength:number;
  private sub: any;
  id: number;
  focus;
  focus1;
  teamFlag:boolean=false; //to check if it has a interval or just a single value Ex: team size :3-4 or Ex: team size:4
  singleCoord:boolean=false; //to check if there is a single coord to print "coordinator" and not "coordinators"
  coordsData:any;
  contacts=[];
  responseData = {};
  teamSize=4;
  formArray=[];//array to iterate the input fields based on team size
  coordsArray:Array<Object>=[];
  apiUrl = 'https://aura.git.edu/api/events/';
  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(params => {
      this.id = +params['id'];// (+) converts string 'id' to a number
      console.log(this.id);

      // In a real app: dispatch action to load the details here.
    });
    // console.log(this.route.params.id);
    // this.http.get(this.apiUrl).subscribe((data) => {
    //   this.newData = data;
    //   console.log(data);
    // });
    this.fetchData(this.id);
  }

  public fetchData(id) {

    this.http.get(this.apiUrl + id).subscribe((data) => {
      this.newData = data;
      console.log(this.newData);
      // console.log(JSON.parse(this.newData.coords).length);
      if(this.newData.minTeamSize==this.newData.maxTeamSize)
      {
        this.teamFlag=true;
      }

      this.coordsLength=JSON.parse(this.newData.coords).length;
      if(this.coordsLength==1)
      {
        this.singleCoord=true;
      }

      for(var i=1;i<=this.newData.maxTeamSize;i++)
      {
        this.formArray.push(i);
      }
      console.log("form array:"+this.formArray);

      this.coords = JSON.parse(this.newData.coords);
      const source = from(this.coords);
      const example = source.pipe(map(({Contact}) => Contact));
      const subscribe = example.subscribe(val => {
        console.log('ph:' + val);
        this.contacts=val;
        console.log(this.coords.length);
        this.http.get('https://aura.git.edu/api/coords/byPh/' + val).subscribe((res) => {
          this.coordsArray.push(res);


        })
      });
      // for(var i=0;i<this.coordsLength;i++)
      // {
      //     // this.contacts[i]=(this.coords[i].Contact);
      //     this.http.get('https://aura.git.edu/api/coords/byPh/'+(this.coords[i].Contact)).subscribe(data=>{
      //     this.coordsArray.push(data);
      //
      //   })
      // }



    });
  }

}



// const source = from(this.coords);
// const example = source.pipe(map(({Contact}) => Contact));
// const subscribe = example.subscribe(val => {
//       console.log('ph:' + val);
//       this.contacts=val;
//       console.log(this.coords.length);
//       this.http.get('https://aura.git.edu/api/coords/byPh/' + val).subscribe((res) => {
//         console.log("this is the response"+JSON.stringify(res));
//         this.coordsData =Array.of( res);
//
//
//       })
//     });
