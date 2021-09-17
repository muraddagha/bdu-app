import { Component, Input, OnInit } from '@angular/core';
import { ScheduleType } from 'src/app/enums/schedule-type';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-header',
  templateUrl: './schedule-header.component.html',
  styleUrls: ['./schedule-header.component.scss']
})
export class ScheduleHeaderComponent implements OnInit {

  @Input() title: string = "";
  @Input() changeActionTitle: string = ""
  @Input() isUppercase: boolean = true

  public activeSchedule: ScheduleType = ScheduleType.Month

  // @Input() monthActive:boolean=false;
  // @Input() dayActive:boolean=false;
  // @Input() 
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.getSchedule()
  }

  public changeSchedule(type: ScheduleType): void {
    this.scheduleService.changeSchedule(type)
  }
  public getSchedule(): void {
    this.scheduleService.getSchdeule().subscribe(res => {
      this.activeSchedule = res
    })
  }
}
