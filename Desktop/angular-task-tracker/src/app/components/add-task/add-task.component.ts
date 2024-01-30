import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title!: string;
  date! : string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  AddTask() {

    if (!this.title || !this.date) {
      alert('please fill the necessary fields')
      return;
    }

    const newTask : Task  = {
    title: this.title,
    date: this.date,
    reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.title = '',
    this.date = '',
    this.reminder = false


  }

}
