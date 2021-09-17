import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentAppealComponent } from './components/document-appeal/document-appeal.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DocumentAppealComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DocumentAppealModule { }
