import { Component, Input, OnInit } from '@angular/core';
import { SmallInfoType } from 'src/app/enums/small-info-type';
import { ISmallInfoData } from './models/small-info-data.model';

@Component({
  selector: 'app-small-info',
  templateUrl: './small-info.component.html',
  styleUrls: ['./small-info.component.scss']
})
export class SmallInfoComponent implements OnInit {

  @Input() type: SmallInfoType = SmallInfoType.FreelanceWork
  @Input() data: ISmallInfoData[]
  constructor() { }

  ngOnInit(): void {
  }

}
