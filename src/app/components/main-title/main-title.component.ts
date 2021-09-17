import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {

  @Input() title: string = ""
  @Input() point: string = ""
  @Input() pointPercent: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
