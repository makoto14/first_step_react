import { List, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import TodoList from "./TodoList";
import { TodoType } from "./TodoType";

const UseState: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [num, setNum] = React.useState<number>(0);
  const [todoList, setTodoList] = React.useState<TodoType[]>([]);

  const addTodo = () => {
    setNum(num + 1);
    const temp = todoList.concat();
    const newTodo: TodoType = {
      id: num,
      name: name,
      isDone: false,
    };
    temp.push(newTodo);
    setTodoList(temp);
    setName("");
  };

  const deleteTodo = (index: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== index);
    setTodoList(newTodoList);
  };

  const toggleTodo = (index: number) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === index) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <div>
        <TextField
          id="todo-title"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>name: {name}</span>
        <Button id="add-todo" variant="text" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </div>
      <div>
        <Button variant="text" color="primary" onClick={() => setNum(num + 1)}>
          Increment Num
        </Button>
        <span>num: {num}</span>
      </div>
      <div>
        <div>TODO List</div>
        <List id="todo-list">
          {todoList.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export default UseState;
