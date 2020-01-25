import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() course: Course;
  @Input() courseIndex: number;
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewd() {
    console.log('In course component');
    this.courseSelected.emit(this.course);
  }

  changeOnBeginner() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
}
