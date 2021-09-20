import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumDialogComponent } from '../curriculum-dialog/curriculum-dialog.component';

@Component({
  selector: 'app-chart-actions',
  templateUrl: './chart-actions.component.html',
  styleUrls: ['./chart-actions.component.scss']
})
export class ChartActionsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openModal() {
    this.dialog.open(CurriculumDialogComponent, {
      data: {

      },
      panelClass: 'referance-modal',
      // maxHeight: '90vh',
      // autoFocus: false
    })

  }

}
