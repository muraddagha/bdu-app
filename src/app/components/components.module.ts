import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MainTitleComponent } from './main-title/main-title.component';



@NgModule({
  declarations: [
    MainTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MainTitleComponent
  ]
})
export class ComponentsModule { }
