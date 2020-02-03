import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private courseService: CoursesService) {
  }
  ngOnInit() {
    this.courses$ = this.courseService.loadCourses();
  }

  onLogoClick() {
    alert('hello world');
  }

  save(course: Course) {
    this.courseService.updateCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
  }
}
