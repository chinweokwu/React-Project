import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
      if(savedTodos) {
        return JSON.parse(savedTodos)
      } else {
        return []
      }
    }
  );

  const [value, setValue] = useState("");  
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({})

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const handleDelete = (todo_id) => {
      const removeItem = todos.filter((todo) => {
        return todo.id !== todo_id;
      })
      setTodos(removeItem)
  }

  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, task: e.target.value });
  }

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  const handleEditClick = (todo) =>{
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  // const completeTask = e => {
  //   const element = todos.findIndex((el) => el.id === e.target.id);

  //   const newToDos = [...todos];
  //       newToDos[element] = {
  //     ...newToDos[element],
  //     completed: !newToDos[element].completed
  //   };
  //   setTodos(newToDos);
  // };

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value !== "") {
      setTodos([...todos, { task: value.trim(), completed: false}])
    }
    setValue("");
  }

  return (
      <div>
         {isEditing ? (
          <form onSubmit={handleEditFormSubmit}>
            <h2>Edit Todo</h2>
            <label htmlFor="editTodo">Edit todo: </label>
            <input
              type="text"
              placeholder="Edit todo"
              value={currentTodo.task}
              onChange={handleEditInputChange}
            />
            <button type="submit">Update</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
        <form onSubmit={handleSubmit}>
          <h2>Add Todo</h2>
          <label htmlFor="todo">Add todo: </label>
          <input
            type="text"
            placeholder="Create a new todo"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      )}
        <ul>
          {
            todos.map((todo) => (
              <li 
                key={todo.id}
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.task}
                <button onClick={() => handleEditClick(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>delete</button>
                {/* <button onClick={(e) => completeTask(e)}>Complete</button> */}
              </li>
            ))
          }
        </ul>
      </div>
    )
}

export default TodoApp;
