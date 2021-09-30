import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = "bdu-app";

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
}
