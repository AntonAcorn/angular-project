import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model'

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

	@Input({required: true}) task!: Task;
	@Output() completeEv = new EventEmitter<string>();

	onCompleteTask() {
		this.completeEv.emit(this.task.id);
	}
}