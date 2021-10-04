import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { IResponseModel } from "../shared/models/response.model";
import { IUser } from "../shared/models/user/user.model";
import { IEducationYear } from "../shared/models/education/education-year.model";
import { IEducationYearReport } from "../shared/models/education/education-year-report.model";
import { ILessonSubwork } from "../modules/lesson-info/models/lesson-subwork.model";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public header = {};
  constructor(private http: HttpClient) {
    const token = localStorage.getItem("auth");
    if (token != null) {
      this.header = {
        auth: token
      };
    }
  }

  public getUserData(): Observable<IUser> {
    let params = {
      kv: {}
    };
    return this.http.post<IUser>(environment.apiUrl + "/user/check", params, { headers: this.header }).pipe(map(res => res["data"]));
  }

  public getStudentTranscript(typeCode: string, lang?: string): Observable<any> {
    let params = {
      kv: {
        typeCode: typeCode,
        lang: lang
      }
    };
    return this.http
      .post<any>(environment.apiUrl + "/EducationSystem/CourseView/GetStudentTranscript", params, { headers: this.header })
      .pipe(map(val => val.tbl));
  }
  public GetCourseOverviewForStudents(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetCourseOverviewForStudents", params, {
      headers: this.header
    });
  }

  public getCourseMeetingListForStudent(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetCourseMeetingListForStudent", params, {
      headers: this.header
    });
  }

  public getEvaluationListByOverview(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetEvaluationListByOverview", params, {
      headers: this.header
    });
  }

  public getSubWorkStudentPointList(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetSubWorkStudentPointList", params, {
      headers: this.header
    });
  }

  public getColloquiumStudentPointList(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetColloquiumStudentPointList", params, {
      headers: this.header
    });
  }

  public getColloquimInStudentPointList(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + `/EducationSystem/CourseView/GetInColloquiumStudentPointList`, params, {
      headers: this.header
    });
  }

  public getEducationYearByCommon(): Observable<IEducationYear[]> {
    let params = {
      kv: {}
    };
    return this.http
      .post<IEducationYear[]>(environment.apiUrl + "/EducationSystem/EduYear/GetEduYearByCommon", params, {
        headers: this.header
      })
      .pipe(map(res => res["tbl"][0]["r"]));
  }

  public getStudentEducationPlanReport(educationYearId: string): Observable<IEducationYearReport> {
    let params = {
      kv: {
        educationYearId: educationYearId
      }
    };
    return this.http.post<IEducationYearReport>(environment.apiUrl + "/EducationSystem/Report/GetStudentEducationPlanReport", params, {
      headers: this.header
    });
  }
}
