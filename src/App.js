import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { CreateTodos } from './Components/CreateTodos';
/* import './App.css'; */
/* const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro de React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
];
 */

function App() {
  const [todos, setTodos] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((item) => (item.done)).length;
  const totalTodos = todos.length;

  let searchedTodos = ''
  //en caso de que hayan escrito en el input
  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.description.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })

  }
  const handleAddItem = addItem => {
    setTodos([...todos, addItem]); // (B-2)
  };

  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
      key = {todos.id}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CreateTodos handleAddItem={handleAddItem} />


      <TodoList todos={todos} setTodos={setTodos} searchedTodos={searchedTodos} />

    </>
  );
}

export default App;
