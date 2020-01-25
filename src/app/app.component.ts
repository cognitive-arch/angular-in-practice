import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo angular course';
  courses = COURSES;

  pipeCouse = COURSES[0];

  onLogoClick() {
    alert('hello world');
  }

  onCourseSelected(course: Course) {
    console.log('In app componen', course);

  }


}
