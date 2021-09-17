import { Component, OnInit } from '@angular/core';
import { ISmallInfoData } from '../small-info/models/small-info-data.model';

@Component({
  selector: 'app-lesson-small-info-area',
  templateUrl: './lesson-small-info-area.component.html',
  styleUrls: ['./lesson-small-info-area.component.scss']
})
export class LessonSmallInfoAreaComponent implements OnInit {
  public freelanceWorkData: ISmallInfoData[]
  public kollokviumData: ISmallInfoData[]
  constructor() {

    this.freelanceWorkData = [
      {
        date: '2021-02-12',
        lesson: 'İnformasiya təhlükəsizliyi',
        isSuccess: false
      },
      {
        date: '2021-02-12',
        lesson: 'İnformasiya təhlükəsizliyi',
        isSuccess: true
      },
      {
        date: '2021-02-12',
        lesson: 'İnformasiya təhlükəsizliyi',
        isSuccess: true
      },
    ]
    this.kollokviumData = [
      {
        date: '15.04.21',
        lesson: 'Təhlükəzlik tədbirləri',
        point: 7
      },
      {
        date: '15.04.21',
        lesson: 'Təhlükəzlik tədbirləri',
        point: 9
      },
      {
        date: '15.04.21',
        lesson: 'Təhlükəzlik tədbirləri',
        point: 4
      },

    ]
  }

  ngOnInit(): void {
  }

}
