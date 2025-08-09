import React, { useRef, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

interface TodoFormProps {
  onAdd(title: string): void;
}

//const TodoForm: React.FC<{onAdd(title:string):void}> = (props) => {

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null); //2 способ

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      //консоль 10 Август 2025 (воскресенье)
      
      console.log(">>>> keyPressHandler из (TodoForm):", title); //консоль
      console.log(">>>> ref из (TodoForm):", ref.current!.value); //2 способ

      //передаем во внешку!!!!!
      props.onAdd(title);

      //очищаем
      ref.current!.value = ""; //2 способ
      setTitle("");
    }
  };

  return (
    <>
      <Container>
        <InputGroup>
          {/* <input type="text" name="todo" id="title" /> */}
          <Form.Control
            ref={ref} //2 способ
            value={title}
            type="text"
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            placeholder="Введите название дела"
          />
        </InputGroup>
      </Container>
    </>
  );
};
export default TodoForm;
