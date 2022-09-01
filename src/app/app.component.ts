import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('validate')
  validate: ElementRef | undefined;

  constructor() {}

  rxjsEventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');

    btnObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
