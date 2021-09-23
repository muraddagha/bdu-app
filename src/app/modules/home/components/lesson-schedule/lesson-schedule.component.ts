import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-lesson-schedule',
  templateUrl: './lesson-schedule.component.html',
  styleUrls: ['./lesson-schedule.component.scss']
})
export class LessonScheduleComponent implements OnInit {

  public lessonSchedule: any[] = []
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getLessonSchedule();
  }

  public getLessonSchedule(): void {
    this.homeService.courseMeetings.subscribe(res => {
      this.lessonSchedule = res
    })
  }
}
