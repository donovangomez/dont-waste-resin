import { type NextPage } from "next";
import Form from "../components/Todos/Form";
import { useState } from "react";

interface TodosState {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
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
        <Form />
      </section>
    </div>
  );
};

export default todos;