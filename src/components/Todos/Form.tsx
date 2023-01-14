import React, { useState } from "react";

interface TodosProps {
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

const Form: React.FC<TodosProps> = ({ todos, setTodos }) => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);

    setTodos([
      ...todos,
      {
        task: inputText,
        completed: false,
        id: Math.floor(Math.random() * 20),
      },
    ]);
  };

  return (
    <form>
      <input
        type="text"
        onChange={inputTextHandler}
        value={inputText}
        placeholder="add a character"
      />
      <button>+</button>
      {inputText}
    </form>
  );
};

export default Form;
