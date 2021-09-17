import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleMonthComponent } from './components/schedule-month/schedule-month.component';
import { ScheduleDayComponent } from './components/schedule-day/schedule-day.component';
import { ScheduleHeaderComponent } from './components/schedule-header/schedule-header.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScheduleWeekComponent } from './components/schedule-week/schedule-week.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleMonthComponent,
    ScheduleDayComponent,
    ScheduleHeaderComponent,
    ScheduleWeekComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ScheduleModule { }
