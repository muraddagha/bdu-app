import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { SidebarType } from 'src/app/enums/sidebar-type';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarType: SidebarType = SidebarType.Education
  public lessons: any[];
  public activeCourse: string = ""
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private homeService: HomeService) {
    this.chnageType();
    this.changeSidebarTypeNavigationSwitch();
  }

  ngOnInit(): void {
    this.getStudentTranscript();
    this.homeService.isContentChanged.subscribe(res => {
      if (res) {
        this.getActiveCourse();
      }
    })
  }


  public getActiveCourse() {
    this.homeService.activeCourse.subscribe(res => {
      this.activeCourse = res
    })
  }
  public getStudentTranscript(): void {
    this.apiService.getStudentTranscript("CURRENT").pipe(map(val => val[0].r)).subscribe(res => {
      this.lessons = res
      this.homeService.changeContent(res[0].courseId);
    })
  }

  public changeLessonData(event, courseId: string) {
    event.preventDefault();
    this.homeService.changeContent(courseId);
  }

  public chnageType(): void {
    this.activatedRoute.firstChild.data.pipe(map(val => val["sidebarType"])).subscribe(res => {
      if (res != null || res != undefined) {
        this.sidebarType = res
      }
    })
  }

  public changeSidebarTypeNavigationSwitch() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.firstChild.data.pipe(map(val => val["sidebarType"])).subscribe(res => {
          if (res != null || res != undefined) {
            this.sidebarType = res
          }
        })
      }
    });
  }

}
