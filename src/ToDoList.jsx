import { useState } from "react";
import List from "@mui/material/List";
import ToDoItem from "./ToDoItem";

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
      {toDos.map((toDo) => (
        <ToDoItem toDo={toDo} key={toDo.id} />
      ))}
    </List>
  );
}
