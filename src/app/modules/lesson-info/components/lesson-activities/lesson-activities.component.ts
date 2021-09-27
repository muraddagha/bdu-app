import { LessonInfoService } from './../../services/lesson-info.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/modules/home/services/home.service';
import { ILessonActivitesModel } from '../../models/lesson-activites.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-activities',
  templateUrl: './lesson-activities.component.html',
  styleUrls: ['./lesson-activities.component.scss']
})
export class LessonActivitiesComponent implements OnInit {

  public courseId:string;
  public lessonActivites:ILessonActivitesModel[];
  constructor(private lessonInfoService:LessonInfoService) { 
    }

  ngOnInit(): void {
    this.getCourseMeetingListForStudent();
  }

  public getCourseMeetingListForStudent(){
    this.lessonInfoService.lessonActivites.subscribe(res=>{
      this.lessonActivites=res
    })
    
    
  }

}
