import { ICourseOverviewRModel } from "./course-overview-r.model";

export interface ICourseOverviewTblModel {
    r: ICourseOverviewRModel[];
    startLimit: string;
    endLimit: string;
    tn: string;
    rowCount: number;
    hiddenColumn: string;
    allRowCount: string;
    seqColumn: string;
}