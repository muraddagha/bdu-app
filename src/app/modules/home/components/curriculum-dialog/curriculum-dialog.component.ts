import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { IEducationYearReport } from 'src/app/shared/models/education/education-year-report.model';
import { IEducationYear } from 'src/app/shared/models/education/education-year.model';

@Component({
  selector: 'app-curriculum-dialog',
  templateUrl: './curriculum-dialog.component.html',
  styleUrls: ['./curriculum-dialog.component.scss'],
})
export class CurriculumDialogComponent implements OnInit {
  public educationYears: IEducationYear[];
  public educationYearReport: IEducationYearReport;
  public activeReport: string;
  constructor(
    private dailogRef: MatDialogRef<CurriculumDialogComponent>,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getEducationYearByCommon();
  }
  public closeDialog() {
    this.dailogRef.close();
  }

  public getEducationYearByCommon() {
    this.apiService.getEducationYearByCommon().subscribe((res) => {
      this.educationYears = res;
      this.changePlanReport(res[0].id);
      this.activeReport = res[0].id;
    });
  }

  public changePlanReport(educationYearId: string) {
    this.apiService
      .getStudentEducationPlanReport(educationYearId)
      .subscribe((res) => {
        this.educationYearReport = res;
      });
    this.activeReport = educationYearId;
  }
}
