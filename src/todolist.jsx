import React, { useState } from 'react';
import TodoTable from "./components/TodoTable";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

function TodoList() {
  const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    if (todo.description.trim() === '' || todo.date.trim() === '') {
      alert('Description and date are required fields.');
      return;
    }
    const newTodo = { ...todo };
    setTodos([...todos, newTodo]);
    setTodo({ description: '', date: '', priority: '' });
  }

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  const gridOptions = {
    floatingFilter: true,
    animateRows: true,
  };

  const columnDefs = [
    {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Date',
      field: 'date',
      sortable: true,
      filter: 'agDateColumnFilter',
    },
    {
      headerName: 'Priority',
      field: 'priority',
      sortable: true,
      filter: 'agTextColumnFilter',
    },
    {
      headerName: 'Action',
      cellRendererFramework: (params) => (
        <button onClick={() => deleteTodo(params.node.rowIndex)}>Delete</button>
      ),
    },
  ];

  return (
    <>
      <h1>Todolist</h1>
      <input
        type="text"
        name="description"
        onChange={inputChanged}
        value={todo.description}
        placeholder="Description"
      />
      <input
        type="date"
        name="date"
        onChange={inputChanged}
        value={todo.date}
        placeholder="Date"
      />
      <input
        type="text"
        onChange={inputChanged}
        placeholder="Priority"
        name="priority"
        value={todo.priority}
      />
      <button onClick={addTodo}>Add</button>
      <div className="ag-theme-material" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          gridOptions={gridOptions}
          columnDefs={columnDefs}
          rowData={todos}
        />
      </div>
      <button onClick={deleteTodo}>Delete</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default TodoList;
