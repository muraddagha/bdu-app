import { createAction, props } from "@ngrx/store";
import { IHomeData } from "../../models/home-data.model";

export const loadAllHomeData = createAction("[Home Data Reslover] Load All Home Data");
export const allHomeDataLoaded = createAction("[Load Home Data Effect] All Home Data loaded", props<{ homeData: IHomeData }>());
export const changeHomeContent = createAction("[Change Home Data Content] Home Data Content Changed", props<{ chnagedData: any }>());
