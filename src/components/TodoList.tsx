import React from "react";
import { Card, Form } from "react-bootstrap";
import { ITodo } from "./inrefaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void; //1 описание как функция
  onRemove: (id: number) => void; //2 описание как стрелочная
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p>Пока дел нет</p>;
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <Card key={todo.id} className=" mb-1">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Form.Check // prettier-ignore
                //type={"switch"} // или "сheckbox"
                type={"checkbox"} // или "сheckbox"
                //id={String(todo.id)}
                //   label={`разрешен вход в систему`}
                //value={todo.completed}
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              {todo.title}
              <div className="btn" onClick={() => onRemove(todo.id)}>
                Delete
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};
export default TodoList;
