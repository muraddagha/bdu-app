import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { IUser } from 'src/app/shared/models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: IUser;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData() {
    this.apiService.getUserData().subscribe((res) => {
      this.user = res;
    });
  }
}
