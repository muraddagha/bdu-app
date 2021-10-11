import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable } from "rxjs";
import { concatMap, map } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { LessonActions } from "./action-types";
import { allLessonsLoaded } from "./lesson.actions";

@Injectable()
export class LessonsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  loadLessons = createEffect(() =>
    this.actions$.pipe(
      ofType(LessonActions.loadAllLessons),
      concatMap(action => this.apiService.getStudentTranscript("CURRENT")),
      map(lessons => allLessonsLoaded({ lessons }))
    )
  );
}
