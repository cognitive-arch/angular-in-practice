import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { Course } from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

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

  onSaveClicked(description: string) {
      console.log(description);
      this.courseSelected.emit({...this.course, description});
  }

  changeOnBeginner() {
    if (this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }
}
