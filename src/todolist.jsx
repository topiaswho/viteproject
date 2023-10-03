import React, { useState } from 'react';
import TodoTable from "./components/TodoTable";

function TodoList() {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    if (event.target.name === 'description') {
      setDesc(event.target.value);
    } else if (event.target.name === 'date') {
      setDate(event.target.value);
    }
  }

  const addTodo = (event) => {
    event.preventDefault();
    if (desc.trim() === '' || date.trim() === '') {
      alert('Description and date are required fields.');
      return;
    }
    const newTodo = { description: desc, date: date };
    setTodos([...todos, newTodo]);
    setDesc('');
    setDate('');
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <>
    <h1>Todolist</h1>
      <input
        type="text"
        name="description"
        onChange={inputChanged}
        value={desc}
        placeholder="Description"
      />
      <input
        type="date"
        name="date"
        onChange={inputChanged}
        value={date}
        placeholder="Date"
      />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />

    </>
  );
}

export default TodoList;
