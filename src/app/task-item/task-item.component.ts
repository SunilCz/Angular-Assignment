import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../types/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() toggleCompleted = new EventEmitter<Task>();

  onToggle() {
    this.toggleCompleted.emit(this.task);
  }
}
