import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonInfoComponent } from './components/lesson-info/lesson-info.component';
import { LessonInfoAreaComponent } from './components/lesson-info-area/lesson-info-area.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SmallInfoComponent } from './components/small-info/small-info.component';
import { LessonSmallInfoAreaComponent } from './components/lesson-small-info-area/lesson-small-info-area.component';
import { LessonActivitiesComponent } from './components/lesson-activities/lesson-activities.component';



@NgModule({
  declarations: [
    LessonInfoComponent,
    LessonInfoAreaComponent,
    SmallInfoComponent,
    LessonSmallInfoAreaComponent,
    LessonActivitiesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LessonInfoModule { }
