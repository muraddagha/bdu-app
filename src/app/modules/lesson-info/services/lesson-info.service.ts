import { ApiService } from "src/app/services/api.service";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { ILessonActivitesModel } from "../models/lesson-activites.model";
import { BehaviorSubject } from "rxjs";
import { SidebarService } from "src/app/components/layout/services/sidebar.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LessonInfoService {
  public courseId: string;
  public lessonActivites: BehaviorSubject<ILessonActivitesModel[]> = new BehaviorSubject<ILessonActivitesModel[]>([]);
  public subWork: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public colloquium: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public colloquiumIn: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private apiService: ApiService, private sidebarService: SidebarService, private router: Router) {}

  public changeContent(courseId) {
    this.apiService
      .getCourseMeetingListForStudent(courseId)
      .pipe(map(val => val.tbl[0].r))
      .subscribe(res => {
        this.lessonActivites.next(res);
      });
    if (this.router.url == "/lesson-info") {
      this.getSubWorkStudentPointList(courseId);
      // this.getColloquiumStudentPointList(courseId);
      this.getColloquimInStudentPointList(courseId);
      this.getEvaluationListByOverview(courseId);
    }
  }

  public getEvaluationListByOverview(courseId) {
    this.apiService.getEvaluationListByOverview(courseId).subscribe(res => {});
  }
  public getSubWorkStudentPointList(courseId) {
    this.apiService
      .getSubWorkStudentPointList(courseId)
      .pipe(
        map(val => {
          if (val.tbl.length > 0) return val.tbl[0].r;
        })
      )
      .subscribe(res => {
        this.subWork.next(res);
      });
  }
  public getColloquiumStudentPointList(courseId) {
    this.apiService.getColloquiumStudentPointList(courseId).subscribe(res => {
      // this.colloquium=res
      // console.log(res);
    });
  }

  public getColloquimInStudentPointList(courseId) {
    this.apiService
      .getColloquimInStudentPointList(courseId)
      .pipe(map(val => val.tbl[0].r))
      .subscribe(res => {
        this.colloquiumIn.next(res);
      });
  }
}
