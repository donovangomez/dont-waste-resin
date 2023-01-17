import React from "react";

interface TodoListProps {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
  farmingCharacters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    farmable_days: string[];
  }[];
  setFarmingCharacters: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        icon: string;
        splash: string;
        farmable_days: string[];
      }[]
    >
  >;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  farmingCharacters,
  setFarmingCharacters,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <>
          <li>{todo.task}</li>
        </>
      ))}
    </ul>
  );
};

export default TodoList;
