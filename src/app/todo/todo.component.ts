import { Component, OnInit } from "@angular/core";

import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoArray: Todo[] = [
    { task: "Fold Laundry", complete: true },
    { task: "Pay Bills", complete: false },
    { task: "Do Dishes", complete: false },
    { task: "Make Bed", complete: true }
  ];

  constructor() {}
  // taskComplete() {
  //   this.isComplete = this.isComlpete ? false : true;
  // }

  ngOnInit(): void {}
}
