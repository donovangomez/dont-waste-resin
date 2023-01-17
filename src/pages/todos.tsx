import { type NextPage } from "next";
import Form from "../components/Todos/Form";
import { useState } from "react";
import TodoList from "../components/Todos/TodoList";
import CharactersContainer from "../components/CharactersContainer";
import { format, compareAsc } from "date-fns";
import { supabase } from "../utils/supabase";

interface TodosState {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  characters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    farmable_days: string[];
  }[];
  weapons: {
    id: number;
    name: string;
    image: string;
    farmable_days: string[];
  }[];
  today: string;
  farmingCharacters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    farmable_days: string[];
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

const todos: NextPage<TodosState> = ({ characters, weapons }) => {
  const [todos, setTodos] = useState<TodosState["todos"]>([]);
  let today = format(new Date(), "EEEE");
  let [farmingCharacters, setFarmingCharacters] = useState<
    TodosState["farmingCharacters"]
  >([]);

  return (
    <div>
      <header>
        <h1>Todo List</h1>
        <h3>What are you gonna do today?</h3>
      </header>
      <div>
        <CharactersContainer
          characters={characters}
          today={today}
          farmingCharacters={farmingCharacters}
          setFarmingCharacters={setFarmingCharacters}
        />
      </div>
      <section>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} />
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data: characters } = await supabase.from("characters").select("*");
  const { data: weapons } = await supabase.from("weapons").select("*");

  return {
    props: {
      characters,
      weapons,
    },
  };
};

export default todos;
