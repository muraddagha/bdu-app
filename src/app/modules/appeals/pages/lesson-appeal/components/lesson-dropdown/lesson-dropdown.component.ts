import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-dropdown',
  templateUrl: './lesson-dropdown.component.html',
  styleUrls: ['./lesson-dropdown.component.scss']
})
export class LessonDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showContent($event) {
    $event.preventDefault();
    $event.target.children[1].classList.toggle("rotate-chevron")
    if ($event.target.nextElementSibling != null && $event.target.nextElementSibling.classList[0] == "dropdown-item") {
      $event.target.nextElementSibling.classList.toggle("active")
    }
  }
}
