import { Component, OnInit } from '@angular/core';
import { ICourseOverviewTeacherModel } from 'src/app/shared/models/course-overview/course-overview-teacher.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-lesson-teachers',
  templateUrl: './lesson-teachers.component.html',
  styleUrls: ['./lesson-teachers.component.scss']
})
export class LessonTeachersComponent implements OnInit {

  public lessonTeachers: ICourseOverviewTeacherModel[] = []
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getLessonTeachers()
  }

  public getLessonTeachers() {
    this.homeService.lessonTeachers.subscribe(res => {
      this.lessonTeachers = res
    })
  }

}
