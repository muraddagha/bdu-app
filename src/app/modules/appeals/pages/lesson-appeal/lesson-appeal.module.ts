import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonAppealRoutingModule } from './lesson-appeal-routing.module';
import { LessonAppealComponent } from './components/lesson-appeal/lesson-appeal.component';
import { LessonAppealsComponent } from './components/lesson-appeals/lesson-appeals.component';
import { LessonAppealCardComponent } from './components/lesson-appeal-card/lesson-appeal-card.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LessonsComponent } from './components/lessons/lessons.component';
import { MainLessonsComponent } from './components/main-lessons/main-lessons.component';
import { LessonDropdownComponent } from './components/lesson-dropdown/lesson-dropdown.component';


@NgModule({
  declarations: [
    LessonAppealComponent,
    LessonAppealsComponent,
    LessonAppealCardComponent,
    LessonsComponent,
    MainLessonsComponent,
    LessonDropdownComponent
  ],
  imports: [
    CommonModule,
    LessonAppealRoutingModule,
    ComponentsModule,
  ]
})
export class LessonAppealModule { }
