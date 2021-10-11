import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-schedule-day',
  templateUrl: './schedule-day.component.html',
  styleUrls: ['./schedule-day.component.scss']
})
export class ScheduleDayComponent implements OnInit {
  private now: string
  public daySchedule: Observable<any>
  constructor(private apiService: ApiService) {
    this.now = new Date().toLocaleDateString()
  }

  ngOnInit(): void {
    this.getDaySchedule()
  }
  private getDaySchedule(): void {
    this.daySchedule = this.apiService.getSchedule(this.now, this.now);
  }

}
