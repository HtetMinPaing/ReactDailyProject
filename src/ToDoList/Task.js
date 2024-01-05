import React from 'react'

const Task = ({task, setComplete, setDelete}) => {
    return (
        <div className={`flex flex-row gap-5 w-[30rem] justify-between items-center px-5 py-2 rounded-lg ${task.isComplete? "bg-green-200": "bg-slate-200"}`}>
            <p>{task.title}</p>
            <div className='flex flex-row justify-center items-end gap-2'>
                <button className="bg-green-200 p-1 border border-green-300 rounded-lg" onClick={(e)=>setComplete(task)}>Done</button>
                <button className="bg-red-200 p-1 border border-red-300 rounded-lg" onClick={(e)=>setDelete(task)}>Delete</button>
            </div>
        </div>
    )
}

export default Task