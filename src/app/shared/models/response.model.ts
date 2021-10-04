import { ICourseOverviewKvModel } from "./course-overview/course-overview-kv.model";
import { ICourseOverviewTblModel } from "./course-overview/course-overview-tbl.model";

export interface IResponseModel {
  kv: any;
  tbl: any[];
  err: any[];
  errMessage: any[];
}

export interface IResponseTblModel {
  r: IResponseRModel[];
  startLimit: string;
  c: any[];
  endLimit: string;
  tn: string;
  rowCount: number;
  hiddenColumn: string;
  allRowCount: string;
  seqColumn: string;
}

export interface IResponseRModel {
  studentFileId: string;
  note: string;
  updateDate: string;
  createUserId: string;
  endDate: string;
  pointEn: string;
  typeName: string;
  teacherFileName: string;
  point: string;
  studentId: string;
  pointId: string;
  typeNameRu: string;
  id: string;
  courseId: string;
  createDate: string;
  studentFileName: string;
  teacherFileId: string;
  typeNameAz: string;
  pointCode: string;
  updateUserId: string;
  courseExecisesId: string;
  active: string;
  pointRu: string;
  typeCode: string;
  typeNameEn: string;
  pointAz: string;
  topicName: string;
  typeId: string;
  startDate: string;
  status: string;
}
