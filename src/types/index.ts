export type ToDoItem = {
  id: string;
  name: string;
  checked: boolean;
}

export enum FilterState {
  ALL = "all",
  DONE = "done",
  UNDONE = "undone"
}
