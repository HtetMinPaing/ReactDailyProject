import React, { useState } from 'react'

const AddTask = ({setLists}) => {

    const [task,setTask] = useState("")
  return (
    <div className="flex flex-row justify-between items-center w-[30vw] px-5 py-1">
        <input type="text" placeholder="Enter Task" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={setLists(task)}>Add</button>
    </div>
  )
}

export default AddTask