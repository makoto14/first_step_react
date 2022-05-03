import CommentIcon from "@mui/icons-material/Comment";
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
  // setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const TodoList: React.VFC<Prop> = (props) => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <CommentIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={props.todo.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoList;
