import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
 private showAddTask : boolean = false;
 private subject  = new Subject<any>();
 private showUpdateTask : boolean = false ;
 private secondSubject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleUpdateTask() : void {
    this.showUpdateTask = !this.showUpdateTask;
    this.secondSubject.next(this.showUpdateTask);
  }

  onUpdate(): Observable<any> {
    return this.secondSubject.asObservable();
  }
}
