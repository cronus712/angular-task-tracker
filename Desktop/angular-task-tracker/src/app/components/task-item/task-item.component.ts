import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleTask : EventEmitter<Task> = new EventEmitter();
  @Output() onUpdateTask : EventEmitter<Task> = new EventEmitter();
  subscription : Subscription;
  showUpdateTask: boolean = false;

  constructor(private uiService : UiService) {
    this.subscription =this.uiService.onUpdate().subscribe((value) => (this.showUpdateTask = value));
  }

  ngOnInit(): void {
  }

  onDelete(task : Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task : Task) {
    this.onToggleTask.emit(task);

  }

  // onUpdate(task : Task) {
  //   this.onUpdateTask.emit(task);
  // }

  onUpdate() {
    console.log(this.showUpdateTask)
    this.uiService.toggleUpdateTask();
  }

}
