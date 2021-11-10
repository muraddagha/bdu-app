import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-modules",
  template: `<app-layout></app-layout>`
})
export class ModulesComponent implements OnInit {
  private token;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.setTokenLocalStorage();
    this.removeQueryParam();
  }

  ngOnInit(): void {
    // console.log(window.location.search);
  }

  public setTokenLocalStorage(): void {
    this.token = this.route.snapshot.queryParams.tkn;
    if (this.token != undefined) {
      localStorage.setItem("auth", `Education ${this.token}`);
    }
  }

  public removeQueryParam(): void {
    var currURL = window.location.href;
    var url = currURL.split("?")[0];
    window.history.pushState({}, document.title, url);
  }
}
