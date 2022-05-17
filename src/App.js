import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { CreateTodos } from './Components/CreateTodos';
import { Header } from './Components/Header';
import './Styles/App.css'

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
      <Header />
      <div className='App'>
        <div>
          <CreateTodos handleAddItem={handleAddItem} />
        </div>
        <div>
          <TodoSearch
            key={todos.id}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoCounter
            total={totalTodos}
            completed={completedTodos}
          />

          <TodoList todos={todos} setTodos={setTodos} searchedTodos={searchedTodos} />

        </div>
      </div>
    </>
  );
}

export default App;
