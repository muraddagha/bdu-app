import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleMonthComponent } from './schedule-month/schedule-month.component';
import { ScheduleDayComponent } from './schedule-day/schedule-day.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleMonthComponent,
    ScheduleDayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
