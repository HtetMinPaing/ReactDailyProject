import React, { useState } from 'react'
import Task from './Task'

const Home = () => {

  const [lists, setLists] = useState([]);
  const [task, setTask] = useState({
    title: "",
    isComplete: false,
  });

  const setComplete = (clickedTask) => {
    setLists(prevLists => {
      return prevLists.map(task => {
        if (task === clickedTask) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    });
  };

  const setDelete = (clickedTask) => {
    setLists(prev => {
      return prev.filter((task) => {
        return task !== clickedTask
      })
    })
  };

  return (
    <div className="flex flex-col items-center gap-3 w-[40rem] h-[90vh] my-[5vh] mx-auto bg-slate-400 p-10 overflow-y-scroll scroll-smooth">
      <div className="flex flex-row justify-between items-center w-[30rem] px-5 py-1">
        <input type="text" placeholder="Enter Task" value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} />
        <button onClick={() => {setLists([...lists,task]); setTask({title: "", isComplete: false})}}>Add</button>
      </div>
      {
        lists.map((task, index) => {
          return (<Task task={task} setComplete={setComplete} setDelete={setDelete} key={index} />)
        })
      }
    </div>
  )
}

export default Home