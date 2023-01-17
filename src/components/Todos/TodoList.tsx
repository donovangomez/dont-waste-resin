import React from "react";

interface TodoListProps {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
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
