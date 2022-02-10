import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const UseState: React.VFC = () => {
  const [name, setName] = React.useState<string>("");
  const [num, setNum] = React.useState<number>(0);

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
      </div>
      <div>
        <Button variant="text" color="primary" onClick={() => setNum(num + 1)}>
          Increment Num
        </Button>
        <span>num: {num}</span>
      </div>
    </div>
  );
};

export default UseState;
