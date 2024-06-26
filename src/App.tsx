import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import { Todo } from './model';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {
        id:Date.now(),
        todo, 
        isDone: false
      }]);
      setTodo("");
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <h1 className='heading'>Taskify</h1>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
   <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
 