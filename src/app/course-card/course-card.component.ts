import {
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ContentChild,
  AfterViewInit,
  AfterContentInit,
  TemplateRef
} from '@angular/core';
import { Course } from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() course: Course;
  @Input() courseIndex: number;
  @Input() noImageTpl: TemplateRef<any>;
  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent)
  images;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log('course car image', this.image);
  }
  ngAfterContentInit() {
    console.log('course car image', this.images);
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
