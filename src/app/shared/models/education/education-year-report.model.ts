export interface IEducationYearReport {
  kv: IEducationYearKv;
  tbl: IEducationYearTbl[];
}

export interface IEducationYearKv {
  specialityName: string;
  kurs: string;
  facultyName: string;
  studentFullname: string;
  educationYearName: string;
}

export interface IEducationYearTbl {
  r: IEducationYearR[];
  length: number;
}

export interface IEducationYearR {
  departmentName: string;
  teachers: string;
  typeName: string;
  credit: string;
  subjectCode: string;
  subjectName: string;
}
