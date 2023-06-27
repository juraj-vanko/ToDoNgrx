import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storageInitialised = false;

  constructor() {}

  async getTodos(): Promise<Todo[]> {
    return [];
  }

  async saveTodos(todos: Todo[]) {}
}
