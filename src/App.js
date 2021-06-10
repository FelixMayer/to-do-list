import React, {useState} from 'react'
import './App.css';
import Input from './components/Input'
import Task from './components/Task'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App container">
      {list.map((task, i)=> (
        <Task task={task} setList={setList} index={i}/>
      ))}
      
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;
