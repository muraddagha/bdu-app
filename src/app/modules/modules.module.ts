import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ModulesComponent } from './modules.component';
import { HomeModule } from './home/home.module';
import { LessonInfoModule } from './lesson-info/lesson-info.module';
import { ScheduleModule } from './schedule/schedule.module';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ComponentsModule,
    HomeModule,
    LessonInfoModule,
    ScheduleModule
  ]
})
export class ModulesModule { }
