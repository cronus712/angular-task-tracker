import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  title!: string;
  date! : string;
  reminder!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
