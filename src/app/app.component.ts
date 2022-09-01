

import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  studentsList = ['Mark' ,'John','David','Lisa'];
  student$: Observable<string[]> = of(this.studentsList);

  //NOTE : WE CAN CREATE OBSERVABLE OF STRING AND OBJECT TYPE AS WELL
constructor() {

}

ngOnInit(): void {

  this.student$.subscribe(
    data => {
     
      console.log(data);
     // console.warn(typeof this.student$);
    }
  )



}


}