import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Create from "@mui/icons-material/Create";
import { useState } from "react";

export default function ToDoForm({ add }) {
  const [text, setText] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(text);
    setText("");
  };
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={text}
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="create toDo" edge="end" type="submit">
                    <Create />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </ListItem>
  );
}
