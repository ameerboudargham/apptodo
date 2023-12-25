import { create } from "zustand";

type Todo = {
  id: number;
  title: string;
  date: string;
  priority: number;
  content: string;
  completed: boolean;
};

interface TodoStore {
  todos: Todo[]|[];
  done: Todo[]|[];
  addTodo: (todo: Todo) => void;
  toggleTodoStatus: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
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
      content: "this is my second note",
      completed: false,
    },
  ],
  done: [
    {
      id: 0,
      title: 'grocery',
      date: '2 days',
      priority: 3,
      content: "this is my first note Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      completed: true,
    },
  ],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTodoStatus: (id) => set((state) => {
    const updatedTodos = state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    const updatedDone = state.done.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    return { todos: updatedTodos, done: updatedDone };
  }),
}));
