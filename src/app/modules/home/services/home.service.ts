import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { ICourseOverviewReportJournalModel } from 'src/app/shared/models/course-overview/course-overview-report-jurnal.model';
import { ICourseOverviewTeacherModel } from 'src/app/shared/models/course-overview/course-overview-teacher.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public lessonTeachers: BehaviorSubject<ICourseOverviewTeacherModel[]> = new BehaviorSubject<ICourseOverviewTeacherModel[]>([]);
  public reportJournal: BehaviorSubject<ICourseOverviewReportJournalModel[]> = new BehaviorSubject<ICourseOverviewReportJournalModel[]>([]);
  public courseMeetings: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public uomg: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public isContentChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private apiService: ApiService) { }

  public changeContent(courseId: string) {
    this.apiService.GetCourseOverviewForStudents(courseId).subscribe(res => {
      this.lessonTeachers.next(res.tbl.filter(val => val.tn == "teachers").map(val => val.r)[0])
      this.reportJournal.next(res.tbl.filter(val => val.tn == "v_ReportJournalOverview").map(val => val.r)[0])
      this.courseMeetings.next(res.tbl.filter(val => val.tn == "coursemeetings").map(val => val.r)[0])
      this.uomg.next(res.kv.uomg)
    });
    this.isContentChanged.next(true)
    
  }

}
