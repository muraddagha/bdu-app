import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-overall-average',
  templateUrl: './overall-average.component.html',
  styleUrls: ['./overall-average.component.scss']
})
export class OverallAverageComponent implements OnInit {

  public uomg: string = ""
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getUomg();
  }

  public getUomg(): void {
    this.homeService.uomg.subscribe(res => {
      this.uomg = res
    })
  }
}
