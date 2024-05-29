import { Component, Input } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

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
	constructor(private tasksService: TasksService) {}
	

	get selectedUserTask() {
		return this.tasksService.getUserTasks(this.userId);
	}

	onClickAddButton() {
		this.isAddedTask = true;
	}

	onCloseAddTask() {
		this.isAddedTask = false;
	}
}