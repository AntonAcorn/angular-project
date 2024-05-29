import { Component, Input } from '@angular/core';

import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
	imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
	@Input({required: true}) name: string | undefined;
	@Input({required: true}) userId!: string;

	isAddedTask = false;
	
	tasks = DUMMY_TASKS;

	selectedUserTask() {
		return this.tasks.filter(task => task.userId === this.userId);
	}

	onCompleteTask(id: string) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	onClickAddButton() {
		this.isAddedTask = true;
	}

	onCancelAddTask() {
		this.isAddedTask = false;
	}
}