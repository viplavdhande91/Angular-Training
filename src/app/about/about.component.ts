import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  count: number;
  constructor() { }
  ngOnInit(): void {



  }

  printData() {
    var observer = new Observable(
      function subscribe(subscriber) {
        try {
          subscriber.next("My First Observable");
          subscriber.next("Testing Observable");
          subscriber.complete();
        } catch (e) {
          subscriber.error(e);
        }
      }
    );
    observer.subscribe(x => console.log(x), (e) => console.log(e),
      () => console.log("Observable is complete"));
  }
}

