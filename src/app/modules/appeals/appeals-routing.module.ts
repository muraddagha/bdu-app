import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentAppealComponent } from './pages/document-appeal/components/document-appeal/document-appeal.component';
import { LessonAppealsComponent } from './pages/lesson-appeal/components/lesson-appeals/lesson-appeals.component';

const routes: Routes = [
  { path: '', component: DocumentAppealComponent },
  {
    path: 'lesson-appeal',
    loadChildren: () => import("./pages/lesson-appeal/lesson-appeal.module").then(m => m.LessonAppealModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppealsRoutingModule { }
