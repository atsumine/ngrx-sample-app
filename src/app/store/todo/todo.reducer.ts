import Todo from '../../models/todo.model';
import { initializeTodoState, TodoListState, TodoState } from './todo.state'
import * as TodoActions from './todo.action';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [{
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
}]

const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
}

export function TodoReducer(state = defaultState, action: Action) {
  console.log(state, action)

  switch (action.type) {
  }
}
