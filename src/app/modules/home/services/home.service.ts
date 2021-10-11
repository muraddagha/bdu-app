import { changeHomeContent, loadAllHomeData } from "./../../../shared/state/home-state/home.actions";
import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { BehaviorSubject, observable, Observable } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { AppState } from "src/app/reducers";
import { ApiService } from "src/app/services/api.service";
import { ICourseOverviewReportJournalModel } from "src/app/shared/models/course-overview/course-overview-report-jurnal.model";
import { ICourseOverviewTeacherModel } from "src/app/shared/models/course-overview/course-overview-teacher.model";
import { allHomeDataLoaded } from "src/app/shared/state/home-state/home.actions";
import { selectAllHomeData } from "src/app/shared/state/home-state/home.selector";
import { HomeActions } from "src/app/shared/state/lesson-2/action-types";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  public lessonTeachers: BehaviorSubject<ICourseOverviewTeacherModel[]> = new BehaviorSubject<ICourseOverviewTeacherModel[]>([]);
  public reportJournal: BehaviorSubject<ICourseOverviewReportJournalModel[]> = new BehaviorSubject<ICourseOverviewReportJournalModel[]>([]);
  public courseMeetings: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public uomg: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public isContentChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private apiService: ApiService, private store: Store<AppState>, private actions$: Actions) {}

  public changeContent(courseId: any) {
    this.apiService.GetCourseOverviewForStudents(courseId).subscribe(res => {
      // this.store.dispatch(changeHomeContent({ chnagedData: res }));
      this.lessonTeachers.next(res.tbl.filter(val => val.tn == "teachers").map(val => val.r)[0]);
      this.reportJournal.next(res.tbl.filter(val => val.tn == "v_ReportJournalOverview").map(val => val.r)[0]);
      this.courseMeetings.next(res.tbl.filter(val => val.tn == "coursemeetings").map(val => val.r)[0]);
      this.uomg.next(res.kv.uomg);
    });

    // this.store
    //   .pipe(
    //     select(selectAllHomeData),
    //     map(res => res[0])
    //   )
    //   .subscribe(res => {
    //     this.lessonTeachers.next(res.tbl.filter(val => val.tn == "teachers").map(val => val.r)[0]);
    //     this.reportJournal.next(res.tbl.filter(val => val.tn == "v_ReportJournalOverview").map(val => val.r)[0]);
    //     this.courseMeetings.next(res.tbl.filter(val => val.tn == "coursemeetings").map(val => val.r)[0]);
    //     this.uomg.next(res.kv.uomg);
    //   });
    this.isContentChanged.next(true);
  }
}
