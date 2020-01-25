import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set('pageNo', '1')
      .set('pageSize', '10');
    return this.http.get<Course[]>('/api/courses', { params });
  }

  updateCourse(course: Course) {
    const headers = new HttpHeaders()
      .set('X-Auth', 'userId');
    console.log(course);
    return this.http.put(`/api/courses/${course.id}`,
      course);
  }

}
