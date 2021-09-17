import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { SidebarType } from 'src/app/enums/sidebar-type';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() sidebarType: SidebarType = SidebarType.Education
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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

  ngOnInit(): void {
  }

}
