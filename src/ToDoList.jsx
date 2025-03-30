import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

const initialToDos = [
  { id: 1, text: "Feed the dog.", completed: false },
  { id: 2, text: "Let the dog out.", completed: false },
  { id: 3, text: "Water the plants.", completed: true },
  { id: 4, text: "Re-fill water purifier.", completed: false },
];

export default function ToDoList() {
  const [toDos, setToDos] = useState(initialToDos);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {toDos.map((toDo) => {
        const labelId = `checkbox-list-label-${toDo.id}`;

        return (
          <ListItem
            key={toDo.id}
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
                  checked={toDo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={toDo.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
