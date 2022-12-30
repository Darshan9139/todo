import { Component } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  
  Todos: Todo[];
 constructor(){
    this.Todos=JSON.parse(localStorage.getItem("todos-list") || '[]');
 }
 DeleteTodo(todo:Todo){
  const index=this.Todos.indexOf(todo);
  this.Todos.splice(index,1);
  localStorage.setItem("todos-list", JSON.stringify(this.Todos));
 }
 AddTodo(todo:Todo){
  this.Todos.push(todo);
  localStorage.setItem("todos-list", JSON.stringify(this.Todos));
 }
 CompleteTodo(todo:Todo){
  const index=this.Todos.indexOf(todo);
  this.Todos[index].status=!this.Todos[index].status;
  localStorage.setItem("todos-list", JSON.stringify(this.Todos));
 }

}
