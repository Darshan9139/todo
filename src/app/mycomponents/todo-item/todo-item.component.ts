import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() Todo: Todo;
  @Output() TodoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() TodoComplete: EventEmitter<Todo> = new EventEmitter();
  
  DeleteTask(Todo:Todo){
     this.TodoDelete.emit(Todo);
  }
  
  CompleteTask(Todo:Todo){
    this.TodoComplete.emit(Todo);
 }
}
