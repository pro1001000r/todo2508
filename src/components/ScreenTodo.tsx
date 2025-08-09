import React, { useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";

const ScreenTodo: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title:string) => {
       
     
     //консоль 10 Август 2025 (воскресенье)
     console.log('>>>> title из (ScreenTodo):', title); //консоль
     
  };
  return (
    <>
      <NavBar />
      <TodoForm onAdd={addHandler}/>
    </>
  );
};
export default ScreenTodo;
