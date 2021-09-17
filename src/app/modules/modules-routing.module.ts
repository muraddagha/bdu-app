import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LessonInfoComponent } from './lesson-info/components/lesson-info/lesson-info.component';
import { ModulesComponent } from './modules.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

const routes: Routes = [
  {
    // data: { templateHeaderType: 1 },
    path: '', component: ModulesComponent,
    children: [
      {
        path: '', component: HomeComponent,
        data: { data: 0 },
      },
      {
        path: 'lesson-info', component: LessonInfoComponent,
        data: { type: 0 }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: { templateHeaderType: 1 },
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
