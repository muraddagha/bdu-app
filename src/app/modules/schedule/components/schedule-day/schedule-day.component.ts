import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-schedule-day",
  templateUrl: "./schedule-day.component.html",
  styleUrls: ["./schedule-day.component.scss"]
})
export class ScheduleDayComponent implements OnInit {
  public now: Date;
  public daySchedule: Observable<any>;
  public day: string;
  constructor(private apiService: ApiService) {
    this.now = new Date();
    console.log(this.now);
  }

  ngOnInit(): void {
    this.getDaySchedule();
    this.getDate();
  }
  private getDaySchedule(): void {
    this.daySchedule = this.apiService.getSchedule(this.now.toLocaleDateString(), this.now.toLocaleDateString());
  }
  public previousDate() {
    this.now.setDate(this.now.getDate() - 1);
    this.daySchedule = this.apiService.getSchedule(this.now.toLocaleDateString(), this.now.toLocaleDateString());
    this.getDate();
  }
  public nextDate() {
    this.now.setDate(this.now.getDate() + 1);
    this.daySchedule = this.apiService.getSchedule(this.now.toLocaleDateString(), this.now.toLocaleDateString());
    this.getDate();
  }
  public getDate(): void {
    const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    const month = months[this.now.getMonth()].toString();
    const day = this.now.getDate();
    this.day = day + " " + month;
  }
}
