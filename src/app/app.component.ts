import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { COURSES } from 'src/db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  courses = COURSES;
  courses$: Observable<Course[]>;

  // @ViewChild('cardRef', {static : false, read: ElementRef})
  // card: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor(private courseService: CoursesService) {
  }
  ngOnInit() {
    // console.log('courseCard:' + this.card);
    this.courses$ = this.courseService.loadCourses();
  }

  ngAfterViewInit() {
     console.log('courseCards:', this.cards);
  }

  onLogoClick() {
    alert('hello world');
  }

  save(course: Course) {
    // console.log(this.card);
    // this.courseService.updateCourse(course)
    //   .subscribe(
    //     () => console.log('Course Saved!')
    //   );
  }
}
