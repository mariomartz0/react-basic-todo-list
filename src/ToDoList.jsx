import { useState, useEffect } from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

const initialToDos = [
  { id: crypto.randomUUID(), text: "Feed the dog.", completed: false },
  { id: crypto.randomUUID(), text: "Let the dog out.", completed: false },
  { id: crypto.randomUUID(), text: "Water the plants.", completed: true },
  {
    id: crypto.randomUUID(),
    text: "Re-fill water purifier.",
    completed: false,
  },
];

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("toDos"));
  if (!data) {
    return initialToDos;
  } else {
    return data;
  }
};

export default function ToDoList() {
  const [toDos, setToDos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

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

  const addToDo = (text) => {
    setToDos((previousToDos) => {
      return [
        ...previousToDos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };

  const removeToDo = (id) => {
    setToDos((previousToDos) => {
      return previousToDos.filter((t) => t.id !== id);
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        ToDos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {toDos.map((toDo) => (
          <ToDoItem
            toDo={toDo}
            key={toDo.id}
            toggle={() => toggleToDo(toDo.id)}
            remove={() => removeToDo(toDo.id)}
          />
        ))}
        <ToDoForm add={addToDo} />
      </List>
    </Box>
  );
}
