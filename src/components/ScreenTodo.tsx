import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "./inrefaces";

declare var confirm: (q: string) => boolean; //объявление типа confirm

const ScreenTodo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]; //ЛайфХак с пустым значением
    
    //консоль 10 Август 2025 (воскресенье)
    console.log('>>>> todos из (ScreenTodo):', saved); //консоль
    
    setTodos(saved);
  }, []);

  

  const addHandler = (title: string) => {
    //консоль 10 Август 2025 (воскресенье)
    console.log(">>>> title из (ScreenTodo):", title); //консоль

    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };

    //setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    
    //консоль 11 Август 2025 (понедельник)
    console.log('>>>> checkbox id:', id); //консоль
    
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log('>>>> todo.completed id:', todo.completed); //консоль
          console.log('>>>> checkbox id:', id); //консоль
    
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const isrem = confirm("вы уверены что хотите удалить?"); //!!!!!!! confirm
    if (isrem) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <NavBar />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
export default ScreenTodo;
