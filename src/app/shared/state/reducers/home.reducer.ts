import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { IHomeData } from "../../models/home-data.model";
import { HomeActions } from "../lesson-2/action-types";

export interface HomeState extends EntityState<IHomeData> {
  allHomeDataLoaded: boolean;
}

export const adapter = createEntityAdapter<IHomeData>();

export const initialHomeDataState = adapter.getInitialState({
  allHomeDataLoaded: false
});

export const homeDataReducer = createReducer(
  initialHomeDataState,
  on(HomeActions.allHomeDataLoaded, (state, action) => adapter.addOne(action.homeData, { ...state, allHomeDataLoaded: true }))
);

export const changeHomeDataReducer = createReducer(
  initialHomeDataState,
  on(HomeActions.changeHomeContent, (state, action) => adapter.addOne(action.chnagedData, { ...state, allHomeDataLoaded: true }))
);

export const { selectAll } = adapter.getSelectors();
