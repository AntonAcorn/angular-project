import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { type User } from './user.model'

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //	@Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  // The input works as a signal, so in HTML this field needs to be called as a function with ().
  // name = input.required<string>();
  // avatar = input.required<string>();

  @Input({ required: true }) user!: User;
	@Input({ required: true }) isSelected!: boolean;

  @Output() select = new EventEmitter<string>();
  //select = output<string>();

  // Лучше использовать computed, потому что Angular будет пересчитывать только при изменении данных в avatar
  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  // Геттер вызывается как свойство, а не как функция
  // get imagePath() {
  // 	return 'assets/users/' + this.avatar();
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
