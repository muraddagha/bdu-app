import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IResponseModel } from '../shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public header = {}
  constructor(private http: HttpClient) {
    let token = localStorage.getItem("auth")
    this.header = {
      "auth": token
    }
  }

  public getStudentTranscript(typeCode: string, lang?: string): Observable<any> {
    let params = {
      kv: {
        typeCode: typeCode, lang: lang
      }
    }
    return this.http.post<any>(environment.apiUrl + "GetStudentTranscript", params, { headers: this.header }).pipe(map(val => val.tbl));
  }
  public GetCourseOverviewForStudents(courseId: string): Observable<IResponseModel> {
    let params = {
      kv: {
        courseId: courseId
      }
    }
    return this.http.post<IResponseModel>(environment.apiUrl + "GetCourseOverviewForStudents", params, { headers: this.header });
  }
}
