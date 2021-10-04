import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SidebarService {
  public activeCourse: BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor() {}

  public setActiveLesson(courseId: string) {
    this.activeCourse.next(courseId);
  }
}
