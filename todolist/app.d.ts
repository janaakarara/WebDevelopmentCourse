interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
type Filter = 'all' | 'active' | 'completed';
declare let todos: Todo[];
declare let currentFilter: Filter;
declare const todoInput: HTMLInputElement;
declare const addBtn: HTMLButtonElement;
declare const todoList: HTMLUListElement;
declare const itemsLeft: HTMLSpanElement;
declare const clearCompletedBtn: HTMLButtonElement;
declare const clearAllBtn: HTMLButtonElement;
declare const filterButtons: NodeListOf<HTMLButtonElement>;
declare function render(): void;
declare function addTodo(): void;
declare function toggleTodo(id: number): void;
declare function deleteTodo(id: number): void;
declare function clearCompleted(): void;
declare function clearAll(): void;
//# sourceMappingURL=app.d.ts.map