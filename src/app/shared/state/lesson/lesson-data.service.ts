import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ILessonData } from "src/app/components/layout/models/lesson.model";
import { environment } from "src/environments/environment";

@Injectable()
export class LessonDataService extends DefaultDataService<ILessonData> {
  public header = {};
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super("Lessons", http, httpUrlGenerator);
    const token = localStorage.getItem("auth");
    if (token != null) {
      this.header = {
        auth: token
      };
    }
  }
  getAll(): Observable<ILessonData[]> {
    let header = {};
    const token = localStorage.getItem("auth");
    if (token != null) {
      this.header = {
        auth: token
      };
    }
    console.log(header);

    let params = {
      kv: {
        typeCode: "CURRENT",
        lang: "az"
      }
    };
    return this.http
      .post<ILessonData[]>(environment.apiUrl + "/EducationSystem/CourseView/GetStudentTranscript", params, { headers: header })
      .pipe(map(res => res["tbl"][0]["r"]));
  }
  getWithQuery(typeCode: string): Observable<any> {
    let params = {
      kv: {
        typeCode: typeCode
      }
    };
    return this.http
      .post<any>("https://demo.empro.az/AuthRest2/api/jwt/EducationSystem/CourseView/GetStudentTranscript", params, { headers: this.header })
      .pipe(map(res => res.tbl[0].r));
  }
}
