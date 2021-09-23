import { Component, OnInit } from '@angular/core';
import { ICourseOverviewReportJournalModel } from 'src/app/shared/models/course-overview/course-overview-report-jurnal.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-lesson-point',
  templateUrl: './lesson-point.component.html',
  styleUrls: ['./lesson-point.component.scss']
})
export class LessonPointComponent implements OnInit {

  public lessonReports: ICourseOverviewReportJournalModel[] = []
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getLessonReport();
  }

  public getLessonReport(): void {
    this.homeService.reportJournal.subscribe(res => {
      this.lessonReports = res
    })
  }

}
