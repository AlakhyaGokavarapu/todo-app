import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  const addTodo = () => {
    axios.post("http://localhost:5000/todos", { text }).then((res) => {
      setTodos([...todos, res.data]);
      setText("");
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>MERN Todo App</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      {todos.map((t) => (
        <div key={t._id}>{t.text}</div>
      ))}
    </div>
  );
}

export default App;
