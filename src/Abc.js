//Bản lưu nháp
// import React, {useState} from 'react'
// import "./App.css"

// function App() {
//     const [tasks,setTasks] = useState([
//         {id: "task_1",title:"Learn JS", status: 0},
//         {id: "task_2",title:"Code a Todo List", status: 0},
//     ])
//     const [showIncomplete,setShowIncomplete] = useState(true);

//     const [valueInput,setValueInput] = useState("123");
//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         if(valueInput){
//             const task = {id:Date.now(),title:valueInput, status:0}
//             setTasks([...tasks,task]);
//             setValueInput("");
//         }
//     }
//     const handleInputChange=(e)=>{
//         setValueInput(e.target.value);
//     }
//     const setTaskStatus = (taskId,status)=>{
//         setTasks(tasks.map(task=>{
//             if(task.id === taskId){
//                 return {...task,status:status?1:0};
//             }
//             return task;
//         })
//         );
//     }
//     const removeTask = (taskId)=>{
//         setTasks(tasks.filter((task)=>task.id !== taskId))
//     }
//   return (
//     <div>
//       <div className="container">
//   <h1 className="title">Todo List
//   <span>Get things done, one item at a time</span></h1>
//    <ul className="task-list">
//     {tasks
//     .filter(task=>(showIncomplete? task.status!==1:true))
//     .map(task=>(
//         <li key={task.id} className={task.status?"done":""}>
//         <span className="label">{task.title}</span>
//         <div className="action">
//           <input 
//           type="checkbox" 
//           className="btn-action btn-action-done"
//           checked={Boolean(task.status)}
//           onChange = {(e)=>setTaskStatus(task.id,e.target.checked)}
//           /> 
//           <button 
//           onClick={()=>removeTask(task.id)}
//           className="btn-action btn-action-delete">❌</button>
//         </div>
//       </li>
//     ))}
    
//   </ul>
//   <div className="filter-wrapper">
//     <label htmlFor="filter">Show incompleted tasks only</label>
//     <input checked={showIncomplete}onChange={(e)=>setShowIncomplete(e.target.checked)}type="checkbox" id="filter"/>
//   </div>
//   <form onSubmit = {handleSubmit} action="#">
//     <label htmlFor="newitem">Add to the todo list</label>
//     <input value={valueInput} type="text" id="newitem" onChange={handleInputChange}/>
//     <button  type="submit">Add Item</button>
//   </form>
// </div>
//     </div>
//   )
// }

// export default App
