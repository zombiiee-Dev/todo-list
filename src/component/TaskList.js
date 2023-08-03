import React from 'react'
import TaskItems from './TaskItems'

function TaskList({tasks,showIncomplete,setTaskStatus,removeTask,setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
    {tasks
    .filter(task=>(showIncomplete? task.status!==1:true))
    .map(task=>(
        <TaskItems
        key={task.id} 
        task={task}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}/>
     ))}
    
    </ul>
    <div className="filter-wrapper">
    <label htmlFor="filter">Show incompleted tasks only</label>
    <input checked={showIncomplete}onChange={(e)=>setShowIncomplete(e.target.checked)}type="checkbox" id="filter"/>
  </div>
  </>
  )
}

export default TaskList
