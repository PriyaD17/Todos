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


  return(
    <div>
      <header>The Todo App</header>
      <p>Input Todo</p>
     <br /><br /><br />
     <input type="text" className='task' placeholder='Todo' value={task} onChange={(e)=> setTask(e.target.value)}/>
     <br /><br />

      <input type="text" className='desc' placeholder='Description' value= {desc} onChange={(e)=> setDesc(e.target.value)}/>
      <br /><br />
      <button onClick={() => console.log({ task, description })}>Add Todo</button>
    </div>
  )
}

export default App
