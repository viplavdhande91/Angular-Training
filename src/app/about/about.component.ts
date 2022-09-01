import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  agents: Observable<string>; //CREATION OF OBSERVABLE
  agentName: string;
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next('Ram');

        setTimeout(() => {
          observer.next('Laxman');
        }, 3000);

        setTimeout(() => {
          observer.next('Sita');
        }, 6000);
      } catch (e) {
        observer.error(e);
        
      }
    });

    this.agents.subscribe((data) => {
      this.agentName = data; // this.agentName value will get updated once observer.next() runs.
    });
  }
}
