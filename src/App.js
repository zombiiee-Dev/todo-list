import React, {useState} from 'react'
import "./App.css"
import Header from './component/Header';
import TaskList from './component/TaskList';
import AddTaskForm from './component/AddTaskForm';

function App() {
    const [tasks,setTasks] = useState([
        {id: "task_1",title:"Learn JS", status: 0},
        {id: "task_2",title:"Code a Todo List", status: 0},
    ])
    const [showIncomplete,setShowIncomplete] = useState(true);

    const [valueInput,setValueInput] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(valueInput){
            const task = {id:Date.now(),title:valueInput, status:0}
            setTasks([...tasks,task]);
            setValueInput("");
        }
    }
    const handleInputChange=(e)=>{
        setValueInput(e.target.value);
    }
    const setTaskStatus = (taskId,status)=>{
        setTasks(tasks.map(task=>{
            if(task.id === taskId){
                return {...task,status:status?1:0};
            }
            return task;
        })
        );
    }
    const removeTask = (taskId)=>{
        setTasks(tasks.filter((task)=>task.id !== taskId))
    }
  return (
    
      <div className="container">
  <Header 
     title="Todo List"
     subcrise="Get things done, one item at a time"/>
  <TaskList 
  tasks={tasks}
  showIncomplete={showIncomplete}
  setTaskStatus={setTaskStatus}
  removeTask={removeTask}
  setShowIncomplete={setShowIncomplete}/>
  
  
  <AddTaskForm 
  handleSubmit={handleSubmit}
  valueInput={valueInput}
  handleInputChange={handleInputChange}/>
      </div>
    
  )
}

export default App
