import { Component, OnInit } from '@angular/core';
import { ScheduleType } from 'src/app/enums/schedule-type';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public scheduleType: ScheduleType = ScheduleType.Month
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.getSchedule()
  }

  public getSchedule() {
    this.scheduleService.getSchdeule().subscribe(res => {
      this.scheduleType = res
    })
  }

}
