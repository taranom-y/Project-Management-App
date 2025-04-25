import { useRef } from "react";
import Input from "./Input";

export default function NewProjects(onAdd) {
 const title= useRef();
 const description= useRef();
 const dueDate= useRef();


 function handleSave(){
  const enteredTitle= title.current.value;
  const enteredDes = description.current.value;
  const enteredDueDate = dueDate.current.value;

  onAdd({
    title: enteredTitle,
    description: enteredDes,
    dueDate : enteredDueDate
  });
    
 }





    return (
        <div className="w-[35rem]  mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
             <button className="text-stone-800 
             hover:text-stone-950">Cancle</button>
            </li>
            <li>
             <button className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 
             hover:bg-stone-950 " onClick={handleSave}>Save</button>
            </li>
        </menu>
        <div>
            <Input type="text" label="Title" ref={title}/>
            <Input label="Description" ref={description} textarea/>
            <Input type="date" label="Due Date" ref={dueDate}/>
        </div>
        </div>
    );
}