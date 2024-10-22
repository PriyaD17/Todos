import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
    <Enter/>
      
      
    </div>
  )
}

function Enter(){
  const [task, setTask]= useState('');
  const [desc, setDesc]= useState('');
  const [todo, setTodo]= useState([]);

  const addtodo=()=> {
    if(task && desc){
      const newtodo= { task, desc};
      setTodo([...todo,newtodo]);
      setTask('');
      setDesc('');
    }
  }

  return(
    <div>
      <header>The Todo App</header> <br />
      <b>Input Todo</b>
     <br /><br /><br />
     <input type="text" className='task' placeholder='Todo' value={task} onChange={(e)=> setTask(e.target.value)}/>
     <br /><br />

      <input type="text" className='desc' placeholder='Description' value= {desc} onChange={(e)=> setDesc(e.target.value)}/>
      <br /><br />
      <button onClick={addtodo}>Add Todo</button>


      <div>

        <br /><br /><br />

        <h3>TODO List</h3>
        <ul>
          {todo.map((onetodo,index) => 
         ( <li key={index}>
            <strong> {onetodo.task}</strong>: {onetodo.desc}
          </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App
