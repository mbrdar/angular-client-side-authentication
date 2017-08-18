export class Todo {
  title: string;
  content: string;

  constructor(todo?: any) {
    this.title = todo && todo.title || null;
    this.content = todo && todo.content || null;
  }
}
