import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
	users = DUMMY_USERS;

	obtainUser(id: string) {
		return this.users.find(user => user.id === id);
	}

	onSelectUser(id: string) {
		console.log('Selected user id is: ' + id);
	}
}
