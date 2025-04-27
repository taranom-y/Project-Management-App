import { useRef, useState } from "react";



export default function NewTasks({onAdd}){
  const [enteredTasks,setEnteredTasks]=  useState('');


  function handleClick(){
    if(enteredTasks.trim() === ''){
        return;
    }
    onAdd(enteredTasks);
    setEnteredTasks('');
  }


  function handleChange(event){
   setEnteredTasks(event.target.value);

  }

    return(
        <div className="flex items-center gap-4 ">
            <input type="text" onChange={handleChange}
            value={enteredTasks} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className="text-slate-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}