import React, { useState } from "react";

const Form = () => {
  const [inputText, setInputText] = useState("");

  return (
    <form>
      <input type="text" value={inputText} placeholder="add a character" />
      <button>+</button>
    </form>
  );
};

export default Form;
