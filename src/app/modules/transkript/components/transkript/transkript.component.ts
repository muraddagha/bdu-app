import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-transkript",
  templateUrl: "./transkript.component.html",
  styleUrls: ["./transkript.component.scss"]
})
export class TranskriptComponent implements OnInit {
  public studentTranscriptReport: any;
  public transcriptReportTbl: any[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStudentTranscriptReport();
  }

  private getStudentTranscriptReport(): void {
    this.apiService.getStudentTranscriptReport().subscribe(res => {
      this.studentTranscriptReport = res;
      this.transcriptReportTbl = res.tbl;
    });
  }
}
