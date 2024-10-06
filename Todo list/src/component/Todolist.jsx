import React, { useState } from 'react';
import './Todolist.css'


function TodoList(){
    const [task,setTask]=useState([]);
    const [newtask,setNewtask]=useState("");

    function handleinput(e){
        setNewtask(e.target.value); 
   }

    function addtask(){
        if(newtask){
        setTask([...task,newtask]);
        setNewtask("")
        }
    }

    function deletetask(ind){
       const updatedtask= setTask(task.filter((val, index) => index !== ind))
    }

    function uptask(ind){
        if(ind>0){
            const updatedtask=[...task]
        console.log([updatedtask[ind],updatedtask[ind-1]]=[updatedtask[ind-1],updatedtask[ind]]);
        setTask(updatedtask);
        }
    }

    function downtask(ind){
        if(ind<task.length-1){
        const updatedtask=[...task]
        console.log([updatedtask[ind],updatedtask[ind+1]]=[updatedtask[ind+1],updatedtask[ind]])
        setTask(updatedtask);
        }
    }

    return <><div className="maindiv"><h1>Todo List</h1>
    <div className="sub1">
        <input type="text"
        placeholder="enter your task here"
        value={newtask}
        onChange={handleinput}/>
        <button className="add-btn" onClick={addtask}>Add Task</button>
    </div>
    <div className="sub2">
        <ol>
            {task.map((val,i)=><li key={i}>
                <span className='spanntask'>{val}</span> <button className="delete-btn" onClick={()=>deletetask(i)}>❌</button>
                <button className="move-btn" onClick={()=>uptask(i)}>⬆️</button>
                <button className="move-btn" onClick={()=>downtask(i)}>⬇️</button></li>)}
        </ol>
    </div>
    </div></>
}

export default TodoList