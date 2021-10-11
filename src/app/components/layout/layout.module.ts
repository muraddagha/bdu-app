import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { MatMenuModule } from "@angular/material/menu";
import { EntityDefinitionService, EntityMetadataMap } from "@ngrx/data";
import { LessonEntityService } from "src/app/shared/state/lesson/lesson-entity.service";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, MatMenuModule, MatProgressSpinnerModule],
  exports: [HeaderComponent, SidebarComponent, LayoutComponent],
  providers: [LessonEntityService]
})
export class LayoutModule {}
