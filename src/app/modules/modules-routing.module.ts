import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LessonInfoComponent } from './lesson-info/components/lesson-info/lesson-info.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path: '', component: ModulesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'lesson-info', component: LessonInfoComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
