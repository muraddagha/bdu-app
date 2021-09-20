import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonAppealComponent } from './components/lesson-appeal/lesson-appeal.component';
import { LessonAppealsComponent } from './components/lesson-appeals/lesson-appeals.component';

const routes: Routes = [
  { path: '', component: LessonAppealsComponent },
  { path: 'appeal', component: LessonAppealComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonAppealRoutingModule { }
