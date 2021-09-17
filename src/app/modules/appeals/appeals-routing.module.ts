import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentAppealComponent } from './pages/document-appeal/components/document-appeal/document-appeal.component';

const routes: Routes = [
  { path: '', component: DocumentAppealComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppealsRoutingModule { }
