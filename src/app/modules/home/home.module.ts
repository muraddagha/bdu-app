import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LessonPointComponent } from './components/lesson-point/lesson-point.component';
import { LessonTeachersComponent } from './components/lesson-teachers/lesson-teachers.component';
import { LessonScheduleComponent } from './components/lesson-schedule/lesson-schedule.component';
import { OverallAverageComponent } from './components/overall-average/overall-average.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { LessonHeldComponent } from './components/lesson-held/lesson-held.component';
import { ChartAreaComponent } from './components/chart-area/chart-area.component';
import { ChartActionsComponent } from './components/chart-actions/chart-actions.component';
import { RouterModule } from '@angular/router';
import { CurriculumDialogComponent } from './components/curriculum-dialog/curriculum-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TotalPointPipe } from './pipes/total-point.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    LessonPointComponent,
    LessonTeachersComponent,
    LessonScheduleComponent,
    OverallAverageComponent,
    ChartComponent,
    HomeContainerComponent,
    LessonHeldComponent,
    ChartAreaComponent,
    ChartActionsComponent,
    CurriculumDialogComponent,
    TotalPointPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule
  ],
})
export class HomeModule { }
