import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task [] = [];
  // reminder = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(
    (tasks) => this.tasks = tasks);
  }

  deleteTask(task : Task) {
      this.taskService.deleteTask(task)
      .subscribe(
        () =>this.tasks = this.tasks.filter(
        (t) => t.id !== task.id));
  }

  toggleReminder(task : Task) {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }

  AddTasks(task : Task) {
    if (task.title || task.date) {
      this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));

    }
  }

  // updateTaskReminder(task : Task) {
  //   this.taskService.toggleReminder(task).subscribe(() => this.task.reminder = )
  // }

}
