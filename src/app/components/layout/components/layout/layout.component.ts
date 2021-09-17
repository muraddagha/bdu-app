import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LayoutType } from 'src/app/enums/layout-type';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public layoutType: LayoutType = LayoutType.Sidebar
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.firstChild.data.pipe(map(val => val["type"])).subscribe(res => {
          this.layoutType = res
        })
      }
    });
  }

  ngOnInit(): void {
  }

}
