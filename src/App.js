import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm  from './components/NewTodoForm';

function App() {


  const [todos, setTodos] = useState([
    {
      rowNumber : 1,
      rowDescription : 'Get Married',
      rowAssigned : 'Abhinav'
    },
    {
      rowNumber : 2,
      rowDescription : 'Switch Jobs',
      rowAssigned : 'Abhinav'
    },
    {
      rowNumber : 3,
      rowDescription : 'Buy a Home in US',
      rowAssigned : 'Abhinav'
    },
    {
      rowNumber : 4,
      rowDescription : "Buy a Bigger Home in India",
      rowAssigned : 'Abhinav'
    }
  ]);

  const addToDo = () =>{
    if(todos.length > 0){
      const newTodo = {rowNumber : todos.length + 1, rowDescription : 'New Todo', rowAssigned : 'Abhinav'};
      setTodos(todos => [...todos, newTodo]);
      console.log(todos);
    }
  }
  return (
    <div className="App">
      <div className="mt-5 container">
            <div className="card">
                <div className="card-header">
                    Your Todos
                </div>
                <div className="card-body">
                  <TodoTable todos={todos} ></TodoTable>
                  <button className="btn btn-primary" onClick={addToDo}>
                    Add new Todo </button>
                    <NewTodoForm></NewTodoForm>
                </div>
            </div>
      </div>
    </div>            
  );
}

export default App;
