import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LessonInfoComponent } from './lesson-info/components/lesson-info/lesson-info.component';
import { ModulesComponent } from './modules.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';

const routes: Routes = [
  {
    // data: { templateHeaderType: 1 },
    path: '', component: ModulesComponent,
    children: [
      {
        path: '', component: HomeComponent,
        data: { layoutType: 0, sidebarType: 0 },
      },
      {
        path: 'lesson-info', component: LessonInfoComponent,
        data: { layoutType: 0, sidebarType: 0 }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: { layoutType: 1, sidebarType: 0 },
      },
      {
        path: 'appeals',
        data: { layoutType: 0, sidebarType: 1 },
        loadChildren: () => import("./appeals/appeals.module").then(m => m.AppealsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
