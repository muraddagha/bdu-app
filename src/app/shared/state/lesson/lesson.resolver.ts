import { ILessonData } from "./../../../components/layout/models/lesson.model";
import { areLessonsLoaded } from "./../lesson-2/lesson.selector";
import { loadAllLessons } from "./../lesson-2/lesson.actions";
import { filter, finalize, first, map, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LessonEntityService } from "./lesson-entity.service";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/reducers";

@Injectable()
export class LessonResolver implements Resolve<any> {
  private loading: boolean = false;
  constructor(private store: Store<AppState>, private lessonService: LessonEntityService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areLessonsLoaded),
      tap(lessonsloaded => {
        if (!this.loading && !lessonsloaded) {
          this.loading = true;
          this.store.dispatch(loadAllLessons());
        }
      }),
      filter(lessonsloaded => lessonsloaded),
      first(),
      finalize(() => (this.loading = false))
    );
    // return this.lessonService.getAll().pipe(map(val => !!val));
  }
}
