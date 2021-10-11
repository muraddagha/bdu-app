import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { ILessonData } from "src/app/components/layout/models/lesson.model";

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<ILessonData> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super("Lessons", serviceElementFactory);
  }
}
