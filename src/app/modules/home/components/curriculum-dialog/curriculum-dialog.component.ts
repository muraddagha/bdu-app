import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-curriculum-dialog',
  templateUrl: './curriculum-dialog.component.html',
  styleUrls: ['./curriculum-dialog.component.scss']
})
export class CurriculumDialogComponent implements OnInit {

  constructor(private dailogRef: MatDialogRef<CurriculumDialogComponent>) { }

  ngOnInit(): void {
  }
  public closeDialog() {
    this.dailogRef.close();
  }
}
