import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppealsRoutingModule } from './appeals-routing.module';
import { DocumentAppealModule } from './pages/document-appeal/document-appeal.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppealsRoutingModule,
    DocumentAppealModule,
  ]
})
export class AppealsModule { }
