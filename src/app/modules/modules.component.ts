import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

  public layoutType
  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.firstChild.data.subscribe(res => {
  //     console.log(res);

  //   })
  // }


  ngOnInit(): void {
  }

}
