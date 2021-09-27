import { Component, OnInit } from '@angular/core';
import { LessonInfoService } from '../../services/lesson-info.service';
import { ISmallInfoData } from '../small-info/models/small-info-data.model';

@Component({
  selector: 'app-lesson-small-info-area',
  templateUrl: './lesson-small-info-area.component.html',
  styleUrls: ['./lesson-small-info-area.component.scss']
})
export class LessonSmallInfoAreaComponent implements OnInit {
  public freelanceWorkData: ISmallInfoData[]
  public kollokviumData: ISmallInfoData[]
  constructor(private lessonInfoService:LessonInfoService) {
  }

  ngOnInit(): void {
    // this.getSubWorkStudentPointList();
  }

  public getSubWorkStudentPointList(){
    this.lessonInfoService.subWork.subscribe(res=>{
      this.freelanceWorkData=res
    })
  }

  public getColloquiumStudentPointList(){
    this.lessonInfoService.colloquium.subscribe(res=>{
      this.kollokviumData=res
    })
  }

}
