import React from 'react'

function AddTaskForm({handleSubmit,valueInput,handleInputChange}) {
  return (
    <form onSubmit = {handleSubmit} action="#">
    <label htmlFor="newitem">Add to the todo list</label>
    <input value={valueInput} type="text" id="newitem" onChange={handleInputChange}/>
    <button  type="submit">Add Item</button>
  </form>
  )
}

export default AddTaskForm
