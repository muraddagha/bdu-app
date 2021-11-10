import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutType } from "../enums/layout-type";
import { SidebarType } from "../enums/sidebar-type";
import { HomeResolver } from "../shared/state/home-state/home.resolver";
import { LessonResolver } from "../shared/state/lesson/lesson.resolver";
import { HomeComponent } from "./home/components/home/home.component";
import { LessonInfoComponent } from "./lesson-info/components/lesson-info/lesson-info.component";
import { ModulesComponent } from "./modules.component";
import { ScheduleComponent } from "./schedule/components/schedule/schedule.component";
import { TranskriptComponent } from "./transkript/components/transkript/transkript.component";

const routes: Routes = [
  {
    // data: { templateHeaderType: 1 },
    path: "",
    component: ModulesComponent,
    // resolve: {
    //   lessons: LessonResolver
    // },
    children: [
      {
        path: "",
        component: HomeComponent,
        data: { layoutType: LayoutType.Sidebar, sidebarType: SidebarType.Education }
        // resolve: {
        //   homeData: HomeResolver
        // }
      },
      {
        path: "lesson-info",
        component: LessonInfoComponent,
        data: { layoutType: LayoutType.Sidebar, sidebarType: SidebarType.Education }
      },
      {
        path: "schedule",
        component: ScheduleComponent,
        data: { layoutType: LayoutType.OnlyHeader, sidebarType: SidebarType.Education }
      },
      {
        path: "appeals",
        data: { layoutType: LayoutType.Sidebar, sidebarType: SidebarType.Appeals },
        loadChildren: () => import("./appeals/appeals.module").then(m => m.AppealsModule)
      },
      {
        path: "transkript",
        data: { layoutType: LayoutType.OnlyHeader, sidebarType: SidebarType.Education },
        component: TranskriptComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {}
