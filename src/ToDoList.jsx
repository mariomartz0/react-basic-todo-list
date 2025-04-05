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

  const toggleToDo = (id) => {
    setToDos((previousToDos) => {
      return previousToDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed: !toDo.completed };
        } else {
          return toDo;
        }
      });
    });
  };

  const removeToDo = (id) => {
    setToDos((previousToDos) => {
      return previousToDos.filter((t) => t.id !== id);
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {toDos.map((toDo) => (
        <ToDoItem
          toDo={toDo}
          key={toDo.id}
          toggle={() => toggleToDo(toDo.id)}
          remove={() => removeToDo(toDo.id)}
        />
      ))}
    </List>
  );
}
