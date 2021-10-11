import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ILessonData } from "src/app/components/layout/models/lesson.model";
import { LessonActions } from "../lesson-2/action-types";

export interface LessonState extends EntityState<ILessonData> {
  allLessonsLoaded: boolean;
}

export const adapter = createEntityAdapter<ILessonData>();

export const initialLessonsState = adapter.getInitialState({
  allLessonsLoaded: false
});

export const lessonsReducer = createReducer(
  initialLessonsState,
  on(LessonActions.allLessonsLoaded, (state, action) => adapter.addMany(action.lessons, { ...state, allLessonsLoaded: true }))
);

export const { selectAll } = adapter.getSelectors();
