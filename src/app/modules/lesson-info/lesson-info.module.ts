import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonInfoComponent } from './components/lesson-info/lesson-info.component';
import { LessonActivitiesComponent } from './components/lesson-activities/lesson-activities.component';
import { LessonInfoAreaComponent } from './components/lesson-info-area/lesson-info-area.component';
import { FreelanceWorkComponent } from './components/freelance-work/freelance-work.component';
import { KollokviumComponent } from './components/kollokvium/kollokvium.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SmallInfoComponent } from './components/small-info/small-info.component';
import { LessonSmallInfoAreaComponent } from './components/lesson-small-info-area/lesson-small-info-area.component';



@NgModule({
  declarations: [
    LessonInfoComponent,
    LessonActivitiesComponent,
    LessonInfoAreaComponent,
    FreelanceWorkComponent,
    KollokviumComponent,
    SmallInfoComponent,
    LessonSmallInfoAreaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LessonInfoModule { }
