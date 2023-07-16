import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AddItemAction, ToggleItemAction} from "../action/todo-actions";
import {TodoModel} from "../model/todo";
import {Observable} from "rxjs";
import {TodoSelectors} from "../selector/todo-selectors";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Select(TodoSelectors.todoItems) todoItems$!: Observable<TodoModel[]>;

  newItemName!: string;
  items: TodoModel[] = [...new Array(10)].map((_, index) => ({
    id: index + 1,
    isDone: false,
    title: `Todo ${index + 1}`,
  }));

  constructor(private store: Store) {}

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  toggleItem(todoItem: TodoModel) {
    this.store.dispatch(new ToggleItemAction(todoItem.id));
  }

  addItem() {
    this.store.dispatch(new AddItemAction(this.newItemName));
    this.newItemName = '';
  }
}
