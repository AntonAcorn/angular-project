import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
// @Input({required: true}) avatar!: string;
//@Input({required: true}) name!: string;
// The input works as a signal, so in HTML this field needs to be called as a function with ().
name = input.required<string>();
avatar = input.required<string>();


get imagePath() {
	return 'assets/users/' + this.avatar();
}

  onSelectUser() {
   
  }
}
