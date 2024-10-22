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
      const newtodo= { task, desc, completed:false};
      setTodo([...todo,newtodo]);
      setTask('');
      setDesc('');
    }
  }
  const toggleComplete = (index) => {
    const updatedTodos = todo.map((onetodo, i) =>
      i === index ? { ...onetodo, completed: !onetodo.completed } : onetodo
    );
    setTodo(updatedTodos); 
  };

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
<br />
        <hr />

        <h3>TODO List</h3>
        <ul>
          {todo.map((onetodo,index) => 
         ( <li key={index} className={onetodo.completed ? 'completed' : ''}>
            <strong> {onetodo.task}</strong>: {onetodo.desc}
            <button className="complete-btn" onClick={() => toggleComplete(index)}>
              {onetodo.completed ? 'Undo' : 'Mark As Done'}
              </button>
          </li> 
          ))}
        </ul>
      </div>
    </div>

  );
}

export default App
