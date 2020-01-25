import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  constructor() { }

  @Output()
  courseSelected = new EventEmitter<Course>();

  ngOnInit() {
  }

  onCourseViewd() {
    console.log('In course component');
    this.courseSelected.emit(this.course);
  }

}
