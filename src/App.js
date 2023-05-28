import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm  from './components/NewTodoForm';

function App() {

  const[showAddTodoForm, setShowAddTodoForm] = useState(false);

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

  const addToDo = (description, assigned) =>{
    let rowNumber = 0;
    if(todos.length > 0){
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    }else{
      rowNumber =  1;
    }
    const newTodo = {rowNumber : rowNumber, rowDescription : description, rowAssigned : assigned};
    setTodos(todos => [...todos, newTodo]);
    
  }

  const deleteToDo = (deleteToDoRowNumber) =>{
    let filtered = todos.filter(value => {return value.rowNumber !== deleteToDoRowNumber});
    setTodos(filtered);
  }


  return (
    <div className="App">
      <div className="mt-5 container">
            <div className="card">
                <div className="card-header">
                    Your Todos
                </div>
                <div className="card-body">
                  <TodoTable todos={todos} deleteToDo={deleteToDo}></TodoTable>
                  <button className="btn btn-primary" onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
                    { showAddTodoForm ? 'Close New Todo' : 'New Todo'} </button>
                  {showAddTodoForm ?  <NewTodoForm addToDo={addToDo} addButton={setShowAddTodoForm}></NewTodoForm> : <div></div>}  
                </div>
            </div>
      </div>
    </div>            
  );
}

export default App;