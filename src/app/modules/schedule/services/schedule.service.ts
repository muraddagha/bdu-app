import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScheduleType } from 'src/app/enums/schedule-type';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public scheduleType: BehaviorSubject<ScheduleType> = new BehaviorSubject<ScheduleType>(ScheduleType.Month);
  constructor() { }

  public changeSchedule(type: ScheduleType): void {
    this.scheduleType.next(type);
  }

  public getSchdeule(): Observable<ScheduleType> {
    return this.scheduleType
  }
}
