import { type NextPage } from "next";
import Form from "../components/Todos/Form";
import { useState } from "react";
import TodoList from "../components/Todos/TodoList";

interface TodosState {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        task: string;
        completed: boolean;
      }[]
    >
  >;
}

const todos: NextPage<TodosState> = () => {
  const [todos, setTodos] = useState<TodosState["todos"]>([]);

  return (
    <div>
      <header>
        <h1>Todo List</h1>
        <h3>What are you gonna do today?</h3>
      </header>
      <section>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
      </section>
    </div>
  );
};

export default todos;
