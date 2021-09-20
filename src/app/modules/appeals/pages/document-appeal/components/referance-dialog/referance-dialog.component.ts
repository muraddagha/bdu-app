import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-referance-dialog',
  templateUrl: './referance-dialog.component.html',
  styleUrls: ['./referance-dialog.component.scss']
})
export class ReferanceDialogComponent implements OnInit {

  constructor(private dailogRef: MatDialogRef<ReferanceDialogComponent>) { }

  ngOnInit(): void {
  }

  public closeDialog() {
    this.dailogRef.close();
  }

}
