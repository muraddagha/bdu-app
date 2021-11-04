import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, finalize, first, map, tap } from "rxjs/operators";
import { AppState } from "src/app/reducers";
import { IHomeData } from "../../models/home-data.model";
import { loadAllHomeData } from "./home.actions";
import { areHomeDataLoaded } from "./home.selector";

@Injectable()
export class HomeResolver implements Resolve<any> {
  private loading: boolean = false;
  constructor(private store: Store<AppState>) {
    console.log("resolver");
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(areHomeDataLoaded),
      tap(homeDataLoaded => {
        if (!this.loading && !homeDataLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllHomeData());
        }
      }),
      filter(homeDataLoaded => homeDataLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
