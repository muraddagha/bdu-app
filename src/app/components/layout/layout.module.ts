import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent

  ]
})
export class LayoutModule { }
