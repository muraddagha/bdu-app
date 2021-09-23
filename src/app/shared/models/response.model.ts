import { ICourseOverviewKvModel } from "./course-overview/course-overview-kv.model";
import { ICourseOverviewTblModel } from "./course-overview/course-overview-tbl.model";

export interface IResponseModel {
    kv: ICourseOverviewKvModel;
    tbl: ICourseOverviewTblModel[];
    err: any[];
    errMessage: any[];
}