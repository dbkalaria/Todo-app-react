import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react";

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handledeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList)
  }

  function handleEditTodos(index) {
      const valuesToBeEdited = todos[index]
      setTodoValue(valuesToBeEdited)
      handledeleteTodos(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handledeleteTodos={handledeleteTodos} handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
