import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
import { ReferanceDialogComponent } from '../referance-dialog/referance-dialog.component';

@Component({
  selector: 'app-document-appeal',
  templateUrl: './document-appeal.component.html',
  styleUrls: ['./document-appeal.component.scss']
})
export class DocumentAppealComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public showModal(): void {
    this.dialog.open(ReferanceDialogComponent, {
      // data: {
      //   type: type
      // },
      panelClass: 'referance-modal',
      maxHeight: '90vh',
      autoFocus: false
    });


  }
}
