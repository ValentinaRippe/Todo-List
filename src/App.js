import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
/* import './App.css'; */
const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curso de intro de React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
];


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(searchedTodos.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    })
  }

  return (
    <React.Fragment>
      <TodoCounter
      
      total={totalTodos}
      completed={completedTodos}
      />
        
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
        
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text}  
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList> 
      <CreateTodoButton/>  
        
    </React.Fragment>
  );
}

export default App;
