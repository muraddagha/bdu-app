import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MainTitleComponent } from './main-title/main-title.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    MainTitleComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutModule,
    MainTitleComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
