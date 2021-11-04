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
import { IHomeData } from "../shared/models/home-data.model";

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
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {}
    };
    return this.http.post<IUser>(environment.apiUrl + "/user/check", params, { headers: header }).pipe(map(res => res["data"]));
  }

  public getStudentTranscript(typeCode: string, lang?: string): Observable<any> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        typeCode: typeCode,
        lang: lang
      }
    };
    return this.http
      .post<any>(environment.apiUrl + "/EducationSystem/CourseView/GetStudentTranscript", params, { headers: header })
      .pipe(map(val => val.tbl[0].r));
  }
  public GetCourseOverviewForStudents(courseId: number): Observable<IHomeData> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };

    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetCourseOverviewForStudents", params, {
      headers: header
    });
  }

  public getCourseMeetingListForStudent(courseId: string): Observable<IResponseModel> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetCourseMeetingListForStudent", params, {
      headers: header
    });
  }

  public getEvaluationListByOverview(courseId: string): Observable<IResponseModel> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetEvaluationListByOverview", params, {
      headers: header
    });
  }

  public getSubWorkStudentPointList(courseId: string): Observable<IResponseModel> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetSubWorkStudentPointList", params, {
      headers: header
    });
  }

  public getColloquiumStudentPointList(courseId: string): Observable<IResponseModel> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + "/EducationSystem/CourseView/GetColloquiumStudentPointList", params, {
      headers: header
    });
  }

  public getColloquimInStudentPointList(courseId: string): Observable<IResponseModel> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        courseId: courseId
      }
    };
    return this.http.post<IResponseModel>(environment.apiUrl + `/EducationSystem/CourseView/GetInColloquiumStudentPointList`, params, {
      headers: header
    });
  }

  public getEducationYearByCommon(): Observable<IEducationYear[]> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {}
    };
    return this.http
      .post<IEducationYear[]>(environment.apiUrl + "/EducationSystem/EduYear/GetEduYearByCommon", params, {
        headers: header
      })
      .pipe(map(res => res["tbl"][0]["r"]));
  }

  public getStudentEducationPlanReport(educationYearId: string): Observable<IEducationYearReport> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        educationYearId: educationYearId
      }
    };
    return this.http.post<IEducationYearReport>(environment.apiUrl + "/EducationSystem/Report/GetStudentEducationPlanReport", params, {
      headers: header
    });
  }
  public getStudentTranscriptReport(): Observable<any> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {};
    return this.http.post<any>(environment.apiUrl + "/EducationSystem/Report/GetStudentTranscriptReport", params, {
      headers: header
    });
  }
  public getSchedule(startDate: string, endDate: string): Observable<any> {
    let header = {};
    let token = localStorage.getItem("auth");
    if (token != null) {
      header = {
        auth: token
      };
    }
    let params = {
      kv: {
        startDate: startDate,
        endDate: endDate
      }
    };
    return this.http
      .post<any>(environment.apiUrl + "/EducationSystem/CourseSchedule/GetUserSchedule", params, {
        headers: header
      })
      .pipe(map(val => val["tbl"][0]["r"]));
  }
}
