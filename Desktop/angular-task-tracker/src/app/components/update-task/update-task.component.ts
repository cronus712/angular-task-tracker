import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
   head: string = 'Update this Task' ;
   title!: string;
   date!: string;
   reminder!: boolean;
   subscription!: Subscription
   showUpdateTask!:boolean;

   @Output() onUpdateTask : EventEmitter<Task> = new EventEmitter();

  constructor(private uiService : UiService) {
    this.subscription =this.uiService.onUpdate().subscribe((value) => (this.showUpdateTask = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
     }

  updateTask(task : Task) {
    // title: this.title;
    // date : this. date;
    // console.log('here')
    // reminder : this.reminder

    const updatedTask : Task = {
      title: this.title,
      date : this. date,
      reminder : this.reminder
    }

   return this.onUpdateTask.emit(updatedTask);
  }

}
