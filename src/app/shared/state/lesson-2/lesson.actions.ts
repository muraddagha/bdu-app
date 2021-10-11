import { createAction, props } from "@ngrx/store";
import { ILessonData } from "src/app/components/layout/models/lesson.model";

export const loadAllLessons = createAction("[Lessons Reslover] Load All Lessons");
export const allLessonsLoaded = createAction("[Load Lessons Effect]All Lessons loaded", props<{ lessons: ILessonData[] }>());
