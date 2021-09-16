import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ModulesComponent } from './modules.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ComponentsModule,
    HomeModule
  ]
})
export class ModulesModule { }
