import { type NextPage } from "next";
import Form from "../components/Todos/Form";

const todos: NextPage = () => {
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
