import { createSelector } from "@ngrx/store";
import { LessonState } from "./../reducers/lesson.reducer";
import { createFeatureSelector } from "@ngrx/store";
import * as fromLessons from "../reducers/lesson.reducer";

export const selectLessonsState = createFeatureSelector<LessonState>("lessons");

export const selectAllLessons = createSelector(selectLessonsState, fromLessons.selectAll);

export const areLessonsLoaded = createSelector(selectLessonsState, state => state.allLessonsLoaded);

export const selectFirstLessonCourseId = createSelector(selectLessonsState, state => {
  if (state != undefined) {
    if (state.ids.length > 0) {
      return state.entities[state.ids[0]].courseId;
    }
  }
});
