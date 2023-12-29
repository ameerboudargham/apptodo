import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
type Todo = {
  id: number;
  title: string;
  date: string;
  priority: number;
  content: string;
  completed: boolean;
};

interface TodoStore {
  todos: Todo[] | [];
  done: Todo[] | [];
  addTodo: (todo: Todo) => void;
  toggleTodoStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, updatedTodo: Partial<Todo>) => void;
  sortTodosAsc: () => void; 
  sortTodosDesc: () => void; 
  searchTodos: (searchTerm: string) => void;
  sortDoAsc: Function;
  sortDoDesc:Function;
}

export const useTodoStore = create<TodoStore>(
  // @ts-ignore
  persist((set) => ({
  todos: [
    {
      id: 0,
      title: 'grocery',
      date: '2 days',
      priority: 3,
      content: "this is my first note Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      completed: false,
    },
    {
      id: 1,
      title: 'fjalskdjflkasdf',
      date: '3 days',
      priority: 3,
      content: "this is my second note Lorem ipsum dolor sit, amet consectetur adipisicing elit.LorasdnlaknlkanlkcnalsknasB",
      completed: false,
    },
  ],
  done: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodoStatus: (id) => set((state) => {
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    const movedTodo = state.todos.find(todo => todo.id === id);

    if (movedTodo) {
      return {
        todos: updatedTodos.filter(todo => todo.id !== id),
        done: [...state.done, movedTodo],
      };
    }

    const updatedDone = state.done.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    return { todos: updatedTodos, done: updatedDone };
  }),

  deleteTodo: (id) => set((state) => {
    const updatedTodos = state.todos.filter(todo => todo.id !== id);
    const updatedDone = state.done.filter(todo => todo.id !== id);

    return { todos: updatedTodos, done: updatedDone };
  }),

  editTodo: (id, updatedTodo) => set((state) => {
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );

    const updatedDone = state.done.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );

    return { todos: updatedTodos, done: updatedDone };
  }),
  sortTodosAsc: () => set((state) => {
    const sortedTodos = [...state.todos].sort((a, b) => a.priority - b.priority);
    return { todos: sortedTodos, done: state.done };
  }),
  sortTodosDesc: () => set((state) => {
    const sortedTodos = [...state.todos].sort((a, b) => b.priority - a.priority);
    return { todos: sortedTodos, done: state.done };
  }),
  sortDoAsc: (): void => set((state) => {
    const sortedTodos = [...state.done].sort((a, b) => a.priority - b.priority);
    return { done: sortedTodos, todos: state.todos };
  }),
  sortDoDesc: (): void => set((state) => {
    const sortedTodos = [...state.done].sort((a, b) => b.priority - a.priority);
    return { done: sortedTodos, todos: state.todos };
  }),
  
  searchTodos: (searchTerm: string) => set((state) => {
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();

    if (normalizedSearchTerm === '') {
      // If the search term is empty, show all todos
      return state;
    }

    
    const filteredTodos = state.todos.filter((todo) =>
      todo.title.toLowerCase().includes(normalizedSearchTerm) ||
      todo.content.toLowerCase().includes(normalizedSearchTerm)
    );

    const filteredDone = state.done.filter((todo) =>
      todo.title.toLowerCase().includes(normalizedSearchTerm) ||
      todo.content.toLowerCase().includes(normalizedSearchTerm)
    );

    return { ...state, todos: filteredTodos, done: filteredDone };
  }),
  

}),{
  name:"storage"
})
)