import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { TodoType } from "./TodoType";

type Prop = {
  todo: TodoType;
  deleteTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
};

const TodoList: React.FC<Prop> = (props) => {
  const { todo, deleteTodo, toggleTodo } = props;

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        role={undefined}
        dense
        onClick={() => toggleTodo(todo.id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.isDone}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText className="todo-list-contents" primary={todo.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoList;
