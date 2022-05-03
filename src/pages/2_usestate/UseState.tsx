import { List, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import TodoList from "./TodoList";
import { TodoType } from "./TodoType";

const UseState: React.VFC = () => {
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
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <span>name: {name}</span>
        <Button variant="text" color="primary" onClick={addTodo}>
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
        <List>
          {todoList.map((todo) => (
            <TodoList key={todo.id} todo={todo} />
          ))}
        </List>
      </div>
    </div>
  );
};

export default UseState;
