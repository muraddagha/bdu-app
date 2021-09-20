import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson-held',
  templateUrl: './lesson-held.component.html',
  styleUrls: ['./lesson-held.component.scss']
})
export class LessonHeldComponent implements OnInit {

  @ViewChild("svg") svg: ElementRef
  public overral: any;
  constructor() {
    this.overral = 400
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.svg.nativeElement.style.strokeDashoffset = this.overral
  }

}
