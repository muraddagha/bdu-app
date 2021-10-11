import { HomeService } from "src/app/modules/home/services/home.service";
import { areLessonsLoaded, selectAllLessons, selectFirstLessonCourseId } from "./../lesson-2/lesson.selector";
import { allHomeDataLoaded } from "./home.actions";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { ApiService } from "src/app/services/api.service";
import { HomeActions } from "../lesson-2/action-types";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";

@Injectable()
export class HomeEffects {
  private firstId;
  constructor(private actions$: Actions, private apiService: ApiService, private store: Store<AppState>, private homeService: HomeService) {
    this.store.pipe(select(selectFirstLessonCourseId)).subscribe(res => {
      this.firstId = res;
    });
  }
  loadHomeData = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.loadAllHomeData),
      concatMap(action => this.apiService.GetCourseOverviewForStudents(this.firstId)),
      map(homeData => allHomeDataLoaded({ homeData }))
    )
  );
}
