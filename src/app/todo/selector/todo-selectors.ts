import {Selector} from "@ngxs/store";
import {TodoState, TodoStateModel} from "../state/todo-state";
import {TodoModel} from "../model/todo";

export class TodoSelectors{
  @Selector([TodoState])
  static todoItems(state: TodoStateModel): TodoModel[]{
    return state.items;
  }
}
