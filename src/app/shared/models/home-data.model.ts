export interface IHomeData {
  kv: Kv;
  tbl: Tbl[];
}
export interface Kv {
  uomg: string;
  allMeetingCount: string;
  pointWord: string;
  finishMeetingPercent: string;
}
export interface Tbl {
  r: R[];
  tn: string;
}
export interface R {
  evaluationId: string;
  evaluationName: string;
  averagePoint: string;
  evaMaxPoint: string;
  lessonTypeId: string;
  teacherNameRu: string;
  updateDate: string;
  createUserId: string;
  lessonTypeNameAz: string;
  teacherName: string;
  updateUserId: string;
  teacherNameEn: string;
  active: string;
  lessonTypeName: string;
  lessonTypeNameRu: string;
  teacherId: string;
  lessonTypeNameEn: string;
  teacherNameAz: string;
  personId: string;
  id: string;
  courseId: string;
  createDate: string;
}
