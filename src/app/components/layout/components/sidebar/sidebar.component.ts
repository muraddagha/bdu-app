import { changeHomeContent } from "./../../../../shared/state/home-state/home.actions";
import { ILessonData } from "./../../models/lesson.model";
import { selectAllLessons } from "./../../../../shared/state/lesson-2/lesson.selector";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from "@angular/router";
import { map } from "rxjs/operators";
import { SidebarType } from "src/app/enums/sidebar-type";
import { HomeService } from "src/app/modules/home/services/home.service";
import { LessonInfoService } from "src/app/modules/lesson-info/services/lesson-info.service";
import { ApiService } from "src/app/services/api.service";
import { filter } from "rxjs/operators";
import { SidebarService } from "../../services/sidebar.service";
import { LessonEntityService } from "src/app/shared/state/lesson/lesson-entity.service";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { selectAllHomeData } from "src/app/shared/state/home-state/home.selector";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Input() sidebarType: SidebarType = SidebarType.Education;
  public lessons: ILessonData[];
  public activeCourse: string = "";
  public routerUrl: string;
  // public token: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private homeService: HomeService,
    private lessonInfoService: LessonInfoService,
    private sidebarService: SidebarService,
    private lessonService: LessonEntityService,
    private store: Store<AppState>
  ) {
    this.chnageType();
    this.changeSidebarTypeNavigationSwitch();
    router.events.subscribe((res: any) => {
      if (res instanceof NavigationEnd) {
        this.routerUrl = res.url;
        this.changeLessonDataNavChange();
      }
    });
    // this.token = localStorage.getItem("auth").split(" ")[1];
  }

  ngOnInit(): void {
    this.getStudentTranscript();
    this.homeService.isContentChanged.subscribe(res => {
      this.getActiveCourse();
    });
    this.routerUrl = this.router.url.split("?")[0];
  }

  public getActiveCourse() {
    this.sidebarService.activeCourse.subscribe(res => {
      this.activeCourse = res;
    });
  }
  public getStudentTranscript(): void {
    this.store.pipe(select(selectAllLessons)).subscribe(res => {
      this.lessons = res;
      this.sidebarService.setActiveLesson(res[0].courseId);
      this.homeService.changeContent(res[0].courseId);
      this.lessonInfoService.changeContent(res[0].courseId);
    });
  }

  public changeLessonData(event, courseId: string) {
    event.preventDefault();
    switch (this.routerUrl) {
      case "/":
        this.homeService.changeContent(courseId);
        break;
      case "/lesson-info":
        this.lessonInfoService.changeContent(courseId);
        break;
      default:
        break;
    }
    this.sidebarService.setActiveLesson(courseId);
  }

  public changeLessonDataNavChange() {
    switch (this.routerUrl) {
      case "/":
        this.homeService.changeContent(this.activeCourse);
        break;
      case "/lesson-info":
        this.lessonInfoService.changeContent(this.activeCourse);
        break;
      default:
        break;
    }
  }

  public chnageType(): void {
    this.activatedRoute.firstChild.data.pipe(map(val => val["sidebarType"])).subscribe(res => {
      if (res != null || res != undefined) {
        this.sidebarType = res;
      }
    });
  }

  public changeSidebarTypeNavigationSwitch() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.firstChild.data.pipe(map(val => val["sidebarType"])).subscribe(res => {
          if (res != null || res != undefined) {
            this.sidebarType = res;
          }
        });
      }
    });
  }
}
