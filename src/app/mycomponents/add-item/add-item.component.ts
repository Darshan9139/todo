import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  title:string;
  description:string;
  @Output() TodoAdd: EventEmitter<Todo> = new EventEmitter();

  AddTodo(){
    const todo = {
      title:this.title,
      description:this.description,
      status:true
    }
    this.TodoAdd.emit(todo);
  }
 
}
