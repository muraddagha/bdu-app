import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState } from "../reducers/home.reducer";
import * as fromHome from "../reducers/home.reducer";

export const selectHomeState = createFeatureSelector<HomeState>("homeData");

export const selectAllHomeData = createSelector(selectHomeState, fromHome.selectAll);

export const areHomeDataLoaded = createSelector(selectHomeState, state => state.allHomeDataLoaded);
