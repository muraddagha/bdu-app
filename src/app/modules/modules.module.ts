import { TranskriptModule } from "./transkript/transkript.module";
import { LessonsEffects } from "./../shared/state/lesson-2/lesson.effects";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModulesRoutingModule } from "./modules-routing.module";
import { ComponentsModule } from "../components/components.module";
import { ModulesComponent } from "./modules.component";
import { HomeModule } from "./home/home.module";
import { LessonInfoModule } from "./lesson-info/lesson-info.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { EntityMetadataMap, EntityDefinitionService, EntityDataService } from "@ngrx/data";
import { LessonDataService } from "../shared/state/lesson/lesson-data.service";
import { LessonResolver } from "../shared/state/lesson/lesson.resolver";
import { LessonEntityService } from "../shared/state/lesson/lesson-entity.service";
import { StoreModule } from "@ngrx/store";
import { lessonsReducer } from "../shared/state/reducers/lesson.reducer";
import { HomeResolver } from "../shared/state/home-state/home.resolver";
import { HomeEffects } from "../shared/state/home-state/home.effects";
const entityMetaData: EntityMetadataMap = {
  Lessons: {}
};
@NgModule({
  declarations: [ModulesComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ComponentsModule,
    HomeModule,
    LessonInfoModule,
    ScheduleModule,
    TranskriptModule,
    EffectsModule.forFeature([LessonsEffects, HomeEffects]),
    StoreModule.forFeature("lessons", lessonsReducer)
  ],
  providers: [LessonEntityService, LessonResolver, LessonDataService, HomeResolver]
})
export class ModulesModule {
  constructor(private eds: EntityDefinitionService, private entityDataService: EntityDataService, private lessonDataService: LessonDataService) {
    eds.registerMetadataMap(entityMetaData);
    entityDataService.registerService("Lessons", lessonDataService);
  }
}
